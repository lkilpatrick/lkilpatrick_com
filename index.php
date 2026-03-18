<?php
ini_set('display_errors', 'On');

use Contentful\Delivery\Client;
use League\CommonMark\CommonMarkConverter;

require_once __DIR__ . '/vendor/autoload.php';

$spaceID = 'e7nrel642xq0';
$accessToken = 'c005aa2d0b0aecd7dfe6ec6443ce2a087e7799342d788b3c029763370b02e887';


$client = new Client($accessToken, $spaceID);

$query = (new Contentful\Delivery\Query())
	->orderBy('-fields.startdate')
	->setContentType('Experience');

$entries = $client->getEntries($query);

$query = (new Contentful\Delivery\Query())
	->setContentType('about');

$aboutContent = $client->getEntries($query);

?>

<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Luke Kilpatrick's online resume">
    <meta name="author" content="Luke Kilpatrick">

    <title>Resume - Luke Kilpatrick</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="vendor/devicons/css/devicons.min.css" rel="stylesheet">
    <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/resume.min.css" rel="stylesheet">
	  
	  <!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-48849833-3"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-48849833-3');
	</script>

  </head>

  <body id="page-top">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Resume - Luke Kilpatrick</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
			</li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
	<!--
<li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>-->
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">Luke
            <span class="text-primary">Kilpatrick</span>
          </h1>
          <div class="subheading mb-5">Pacifica, California <br>
          </div>
		<? 
			if (count($aboutContent) === 0) {
    			echo "oops, you got no entries in your space. How about creating some?<br />";
			} else {				
				foreach ($aboutContent as $about) {
					echo "<p class=\"mb-5\">";
					$converter = new CommonMarkConverter();
				echo $converter->convertToHtml($about->getAbout()). "</p>";
			 }
			}
		?>
			
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/lkilpatrick" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://twitter.com/lkilpatrick">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/lukekilpatrick/">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.youtube.com/user/scopey42">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-youtube fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

<?

			
if (count($entries) === 0) {
    echo "Ups, you got no entries in your space. How about creating some?<br />";
} else {	
	
    foreach ($entries as $entry) {
		echo "<div class=\"resume-item d-flex flex-column flex-md-row mb-5\">
            <div class=\"resume-content mr-auto\">";
		echo "<h3 class=\"mb-0\">";
		echo $entry->getJobTitle() . "</h3>";
		echo "<div class=\"subheading mb-3\">";
		echo $entry->getCompany() . "</div>";
		$converter = new CommonMarkConverter();
		echo $converter->convertToHtml($entry->getExperincedesc()). "</div>";
		echo "<div class=\"resume-date text-md-right\"><span class=\"text-primary\">";
		echo date_format($entry->getStartdate(),"M Y") . " - ";
		if($entry->getEnddate() == ""){
			echo "Present</span></div>";
		}		
		else{
			echo date_format($entry->getEnddate(), "M Y"). "</span></div>";
		}
		echo "</div>";
    }
}
			
?>
		<div class=\"resume-item d-flex flex-column flex-md-row mb-5\">
	
            <div class=\"resume-content mr-auto\">
				<h3 class="mb-0">More Experience Can be found on  <a href="https://www.linkedin.com/in/lukekilpatrick/">Linkedin</a></h3>
				</div>
			</div>
			
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Seneca College</h3>
              <div class="subheading mb-3">Digital Media Technical Production</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">1999 - 2001</span>
            </div>
          </div>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>My main passion is water, I am often found on it, in it, drinking an aged distilled form of it or under it.<br>
            <br>
            I <a href="https://www.youtube.com/watch?v=k3oBucLhrG4" target="_blank">surf</a> most mornings on the coast and I always find my day starts better when I wake up with a 53&#176F dip in the <a href="https://www.instagram.com/p/BgSa0VUnWiX/" target="_blank">ocean.</a><br>
  <br>
            When I am traveling I seek out some of the best cocktail bars in the world and have visited over <a href="https://www.worlds50bestbars.com/" target="_blank"> 50 of them.</a><br>
  <br>
            Scuba diving is a newer hobby that I started in 2012 and have had the joy of experincing the <a href="https://www.instagram.com/p/Ban6V8eFvmq/" target="_blank">Great Barrier Reef</a>, <a href="https://www.youtube.com/watch?v=A7LEL_2VO8o"  target="_blank">Key Largo</a> and the <a href="https://www.youtube.com/watch?v=R0aw_hsb4qg" target="_blank">Mediterranean</a> as well as diving in <a href="https://www.youtube.com/watch?v=ozHvXIpW2R8" target="_blank">Monterey</a> and off of <a href="https://www.youtube.com/watch?v=DjgDb9mccNg" target="_blank">California's coast</a>. </p>
        </div>
      </section>
	<!--	 <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
        <div class="my-auto">
          <h2 class="mb-5">Contact</h2>
			<div id="contact-area">
          <form method="post" action="contactform/contactengine.php">
				<label for="Name">Name:</label>
				<input type="text" name="Name" id="Name" />
				
				<label for="City">City:</label>
				<input type="text" name="City" id="City" />
	
				<label for="Email">Email:</label>
				<input type="text" name="Email" id="Email" />
				
				<label for="Message"></label><br />
				<textarea name="Message" rows="20" cols="20" id="Message"></textarea>

				<input type="submit" name="submit" value="Submit" class="submit-button" />
			</form>
			
			<div style="clear: both;"></div>
			</div>
        </div>
      </section>-->

    </div>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/resume.min.js"></script>

  </body>

</html>

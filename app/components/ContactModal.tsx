"use client";

import { useState, useEffect, useRef } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => nameRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://sendcontactemail-jwrarzkhna-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={handleClose} />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={handleClose} aria-label="Close">✕</button>

        <div className="modal-eyebrow">Contact</div>
        <h2 id="modal-title" className="modal-title">Get In Touch</h2>
        <p className="modal-subtitle">
          Send me a message and I&apos;ll get back to you as soon as possible.
        </p>

        {status === "success" ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <p className="modal-success-text">Message sent! I&apos;ll be in touch soon.</p>
            <button className="btn-primary" onClick={handleClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-field">
              <label htmlFor="contact-name" className="modal-label">Name</label>
              <input
                id="contact-name"
                ref={nameRef}
                type="text"
                className="modal-input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "sending"}
              />
            </div>
            <div className="modal-field">
              <label htmlFor="contact-email" className="modal-label">Email</label>
              <input
                id="contact-email"
                type="email"
                className="modal-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "sending"}
              />
            </div>
            <div className="modal-field">
              <label htmlFor="contact-message" className="modal-label">Message</label>
              <textarea
                id="contact-message"
                className="modal-input modal-textarea"
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={status === "sending"}
                rows={5}
              />
            </div>

            {status === "error" && (
              <p className="modal-error">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              className="btn-primary modal-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1001;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 40px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.4);
          animation: slideUp 0.25s ease;
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: var(--text-dim);
          font-size: 16px;
          cursor: pointer;
          padding: 6px 10px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          line-height: 1;
        }
        .modal-close:hover {
          color: var(--text);
          background: var(--bg-hover, rgba(255,255,255,0.06));
        }
        .modal-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .modal-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 8px;
        }
        .modal-subtitle {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 28px;
          line-height: 1.6;
        }
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .modal-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .modal-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-dim);
        }
        .modal-input {
          background: var(--bg, #0d1117);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          color: var(--text);
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
        .modal-input::placeholder { color: var(--text-dim); }
        .modal-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(74,158,229,0.15);
        }
        .modal-input:disabled { opacity: 0.6; cursor: not-allowed; }
        .modal-textarea { resize: vertical; min-height: 120px; }
        .modal-error {
          font-size: 13px;
          color: #f87171;
          margin: 0;
        }
        .modal-submit {
          width: 100%;
          justify-content: center;
          padding: 13px 24px;
        }
        .modal-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
        .modal-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 20px 0;
          text-align: center;
        }
        .modal-success-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(60,179,113,0.15);
          border: 1px solid rgba(60,179,113,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: var(--green);
        }
        .modal-success-text {
          font-size: 15px;
          color: var(--text-muted);
          margin: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 16px)); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
        @media (max-width: 540px) {
          .modal { padding: 28px 20px; max-width: calc(100vw - 32px); }
        }
      `}</style>
    </>
  );
}

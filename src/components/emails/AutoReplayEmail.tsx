interface AutoReplyEmailProps {
  name: string;
}

export default function AutoReplyEmail({
  name,
}: AutoReplyEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "650px",
        margin: "0 auto",
        padding: "30px",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#2563eb" }}>
        Thank You for Contacting Me 👋
      </h2>

      <p>Hello <strong>{name}</strong>,</p>

      <p>
        Thank you for reaching out through my portfolio website.
      </p>

      <p>
        I have successfully received your message and will get
        back to you as soon as possible.
      </p>

      <p>
        Usually I reply within <strong>24 hours.</strong>
      </p>

      <br />

      <p>
        Best Regards,
      </p>

      <h3>Alamin Ahmed</h3>

      <p>Full Stack Developer & AI Automation Engineer</p>
    </div>
  );
}
interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial",
        maxWidth: "650px",
        margin: "0 auto",
      }}
    >
      <h2>New Portfolio Message</h2>

      <hr />

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Subject:</strong> {subject}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>{message}</p>
    </div>
  );
}
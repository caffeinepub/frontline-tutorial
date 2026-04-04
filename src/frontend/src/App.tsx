import { useState } from "react";

type Subject = "Math" | "English" | "Science";

interface TestState {
  subject: Subject | null;
  answer: string;
  result: "correct" | "wrong" | null;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  background: "#2e6b2e",
  color: "#fff",
  border: "1px solid #3d7f3d",
  borderRadius: "6px",
  fontSize: "15px",
  boxSizing: "border-box",
  outline: "none",
};

const dropdownSubjects = [
  {
    label: "📐 Math",
    subject: "Math" as Subject,
    topics: ["Algebra", "Geometry"],
  },
  {
    label: "📖 English",
    subject: "English" as Subject,
    topics: ["Grammar", "Writing"],
  },
  {
    label: "🔬 Science",
    subject: "Science" as Subject,
    topics: ["Physics", "Chemistry"],
  },
];

const classFees: Record<string, number> = {
  "Class 8": 2,
  "Class 9": 499,
  "Class 10": 499,
};

const ADMIN_WHATSAPP = "916371411866";

export default function App() {
  // Admission
  const [name, setName] = useState("");
  const [cls, setCls] = useState("");
  const [regno, setRegno] = useState("");
  const [age, setAge] = useState("");

  // Pay Fees section
  const [payClass, setPayClass] = useState("");

  // Subjects dropdowns
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  // Test
  const [test, setTest] = useState<TestState>({
    subject: null,
    answer: "",
    result: null,
  });

  // UPI Validation
  const [upiId, setUpiId] = useState("");
  const [upiResult, setUpiResult] = useState<{
    valid: boolean;
    message: string;
  } | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const sendAdmission = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🎓 *New Admission Request*\n👤 Name: ${name}\n🏫 Class: ${cls}\n🆔 Reg No: ${regno}\n🎂 Age: ${age}`;
    const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handlePayFees = () => {
    const amount = payClass ? (classFees[payClass] ?? 499) : 499;
    window.location.href = `upi://pay?pa=6371411866@upi&pn=FrontlineTutorial&am=${amount}&cu=INR`;
  };

  const startTest = (sub: Subject) => {
    setTest({ subject: sub, answer: "", result: null });
  };

  const checkAnswer = () => {
    setTest((prev) => ({
      ...prev,
      result: prev.answer.trim() === "4" ? "correct" : "wrong",
    }));
  };

  const validateUPI = () => {
    const trimmed = upiId.trim();
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(trimmed);
    if (!trimmed || !isValid) {
      setUpiResult({
        valid: false,
        message: "❌ Invalid UPI ID. Format: name@bank",
      });
    } else {
      setUpiResult({ valid: true, message: "✅ Valid UPI ID!" });
    }
  };

  const currentYear = new Date().getFullYear();
  const selectedPayFee = payClass ? classFees[payClass] : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f2d0f",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ─── Fixed Top Bar ─── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "#1f4d1f",
          padding: "10px 15px",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
        data-ocid="header.section"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#f4e27a",
            fontSize: "16px",
          }}
        >
          <span style={{ fontWeight: "700" }}>🎓 Frontline Tutorial</span>
          <div style={{ display: "flex", gap: "14px" }}>
            <a
              href="tel:6371411866"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
              }}
              data-ocid="header.link"
            >
              📞 Call
            </a>
            <a
              href="https://wa.me/916371411866"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
              }}
              target="_blank"
              rel="noreferrer"
              data-ocid="header.link"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: "46px", width: "100%" }} />

      {/* Cards container */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          padding: "15px",
          boxSizing: "border-box",
          flex: 1,
        }}
      >
        {/* ─── Card 1: New Admission Form ─── */}
        <div
          style={{
            background: "#1f4d1f",
            borderRadius: "10px",
            padding: "20px 15px",
            margin: "10px 0",
          }}
          data-ocid="admission.card"
        >
          <h3
            style={{
              color: "#f4e27a",
              margin: "0 0 18px 0",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            🎓 New Admission Form
          </h3>

          <form onSubmit={sendAdmission}>
            <input
              type="text"
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ ...inputStyle, marginBottom: "12px" }}
              data-ocid="admission.input"
            />

            <select
              value={cls}
              onChange={(e) => setCls(e.target.value)}
              required
              style={{ ...inputStyle, marginBottom: "12px" }}
              data-ocid="admission.select"
            >
              <option value="">Select Class</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
            </select>

            <input
              type="text"
              placeholder="Registration No"
              value={regno}
              onChange={(e) => setRegno(e.target.value)}
              required
              style={{ ...inputStyle, marginBottom: "12px" }}
              data-ocid="admission.input"
            />

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              style={{ ...inputStyle, marginBottom: "18px" }}
              data-ocid="admission.input"
            />

            <button
              type="submit"
              style={{
                padding: "12px 25px",
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold",
              }}
              data-ocid="admission.submit_button"
            >
              📲 Apply Now
            </button>
          </form>
        </div>

        {/* ─── Card 2: Subjects ─── */}
        <div
          style={{
            background: "#1f4d1f",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
          }}
          data-ocid="subjects.card"
        >
          <h3 style={{ color: "#f4e27a", margin: "0 0 14px 0" }}>
            📚 Subjects
          </h3>

          {dropdownSubjects.map((item, i) => (
            <div key={item.subject} data-ocid={`subjects.item.${i + 1}`}>
              <button
                type="button"
                onClick={() => toggleDropdown(i)}
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  background: "#2e6b2e",
                  color: "#f4e27a",
                  border: "none",
                  borderRadius: "6px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "15px",
                  marginBottom: openDropdowns[i] ? "0" : "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                data-ocid={`subjects.toggle.${i + 1}`}
              >
                <span>{item.label}</span>
                <span style={{ fontSize: "12px", opacity: 0.8 }}>
                  {openDropdowns[i] ? "▲" : "▼"}
                </span>
              </button>

              {openDropdowns[i] && (
                <div
                  style={{
                    background: "#3d7f3d",
                    borderRadius: "0 0 6px 6px",
                    padding: "10px 15px",
                    marginBottom: "8px",
                  }}
                >
                  {item.topics.map((topic) => (
                    <div
                      key={topic}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "6px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>{topic}</span>
                      <button
                        type="button"
                        onClick={() => startTest(item.subject)}
                        style={{
                          padding: "5px 12px",
                          background: "#f4e27a",
                          color: "#1a3d1a",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        data-ocid={`subjects.primary_button.${i + 1}`}
                      >
                        Test
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ─── Card 3: Weekly Test ─── */}
        <div
          style={{
            background: "#1f4d1f",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
          }}
          data-ocid="test.card"
        >
          <h3 style={{ color: "#f4e27a", margin: "0 0 14px 0" }}>
            📝 Weekly Test
          </h3>

          {test.subject === null ? (
            <p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>
              Click subject test above
            </p>
          ) : (
            <div>
              <p style={{ marginTop: 0, marginBottom: "12px" }}>
                {test.subject} Test: 2+2=?
              </p>

              <input
                type="text"
                placeholder="Your answer"
                value={test.answer}
                onChange={(e) =>
                  setTest((prev) => ({
                    ...prev,
                    answer: e.target.value,
                    result: null,
                  }))
                }
                style={inputStyle}
                data-ocid="test.input"
              />
              <br />
              <br />

              <button
                type="button"
                onClick={checkAnswer}
                style={{
                  padding: "10px 20px",
                  background: "#25D366",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "100%",
                }}
                data-ocid="test.submit_button"
              >
                Submit
              </button>

              {test.result !== null && (
                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: test.result === "correct" ? "#6ef48a" : "#ff7c7c",
                  }}
                  data-ocid={
                    test.result === "correct"
                      ? "test.success_state"
                      : "test.error_state"
                  }
                >
                  {test.result === "correct"
                    ? "✅ Correct!"
                    : "❌ Wrong, try again"}
                </p>
              )}
            </div>
          )}
        </div>

        {/* ─── Card 4: Pay Fees ─── */}
        <div
          style={{
            background: "#1f4d1f",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
          }}
          data-ocid="payment.card"
        >
          <h3 style={{ color: "#f4e27a", margin: "0 0 14px 0" }}>
            💳 Pay Fees
          </h3>

          <select
            value={payClass}
            onChange={(e) => setPayClass(e.target.value)}
            style={inputStyle}
            data-ocid="payment.select"
          >
            <option value="">Select Class</option>
            <option value="Class 8">Class 8 (₹2)</option>
            <option value="Class 9">Class 9 (₹499)</option>
            <option value="Class 10">Class 10 (₹499)</option>
          </select>

          {selectedPayFee !== null && (
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "14px",
                color: "#f4e27a",
                fontWeight: "bold",
              }}
            >
              Fee: ₹{selectedPayFee}
            </p>
          )}
          <br />

          <button
            type="button"
            onClick={handlePayFees}
            style={{
              padding: "12px 20px",
              background: "#f4e27a",
              color: "#1a3d1a",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              width: "100%",
            }}
            data-ocid="payment.primary_button"
          >
            Pay Fees{selectedPayFee !== null ? ` ₹${selectedPayFee}` : ""}
          </button>
        </div>

        {/* ─── Card 5: Validate UPI ID ─── */}
        <div
          style={{
            background: "#1f4d1f",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
          }}
          data-ocid="upi.card"
        >
          <h3 style={{ color: "#f4e27a", margin: "0 0 14px 0" }}>
            🔍 Validate UPI ID
          </h3>

          <input
            type="text"
            placeholder="example@upi"
            value={upiId}
            onChange={(e) => {
              setUpiId(e.target.value);
              setUpiResult(null);
            }}
            style={inputStyle}
            data-ocid="upi.input"
          />
          <br />
          <br />

          <button
            type="button"
            onClick={validateUPI}
            style={{
              padding: "10px 20px",
              background: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "15px",
              cursor: "pointer",
              width: "100%",
              fontWeight: "bold",
            }}
            data-ocid="upi.primary_button"
          >
            Validate UPI
          </button>

          {upiResult !== null && (
            <p
              style={{
                marginTop: "12px",
                fontSize: "15px",
                fontWeight: "bold",
                color: upiResult.valid ? "#6ef48a" : "#ff7c7c",
                margin: "12px 0 0 0",
              }}
              data-ocid={
                upiResult.valid ? "upi.success_state" : "upi.error_state"
              }
            >
              {upiResult.message}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#1f4d1f",
          width: "100%",
          padding: "12px",
          textAlign: "center",
          fontSize: "12px",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        © {currentYear}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#f4e27a", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

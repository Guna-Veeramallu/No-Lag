import { useState } from "react";
import "../../styles/SettingsPageRight.css";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5"
       strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function SettingsPageRight() {
  const [webAdmin, setWebAdmin] = useState("cash");

  const [clientMethods, setClientMethods] = useState({
    accountBalance: true,
    summonHuman: true,
    stripePhone: true,
    payAfterLogout: true,
  });

  const [taxIncluded, setTaxIncluded] = useState(true);

  const toggleClient = (key) =>
    setClientMethods((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="financial-page">
      <h1 className="financial-page__title">Center/Financial</h1>

      <div className="financial-grid">
        {/* ---------------- Left column ---------------- */}
        <div className="financial-col">
          <section className="card card--violet">
            <h2 className="card__title">Billing Information</h2>

            <div className="field">
              <label className="field__label">Company name</label>
              <input className="input" type="text" />
            </div>

            <div className="field-row">
              <div className="field">
                <label className="field__label">Tax number</label>
                <input className="input" type="text" />
              </div>
              <div className="field field--narrow">
                <label className="field__label">Decimal places</label>
                <input className="input" type="text" defaultValue="2" />
              </div>
            </div>

            <div className="field">
              <label className="field__label">Address</label>
              <textarea className="textarea" />
            </div>
          </section>
        </div>

        {/* ---------------- Right column ---------------- */}
        <div className="financial-col">
          <section className="card card--violet">
            <h2 className="card__title">Accepted Web-Admin Payment Methods</h2>
            <div className="radio-row">
             <label className="checkbox">
                <input
                    type="checkbox"
                />
                <span className="checkbox__box">
                    <CheckIcon />
                </span>
                Cash
             </label>
             <label className="checkbox">
                <input
                    type="checkbox"
                />
                <span className="checkbox__box">
                    <CheckIcon />
                </span>
                Credit card
             </label>
             <label className="checkbox">
                <input
                    type="checkbox"
                />
                <span className="checkbox__box">
                    <CheckIcon />
                </span>
                Account balance
             </label>
            </div>
          </section>

          <section className="card card--violet">
            <h2 className="card__title">Accepted Client Payment Methods</h2>
            <div className="toggle-list">
              {[
                ["accountBalance", "Account balance"],
                ["summonHuman", "Summon a human"],
                ["stripePhone", "Stripe (phone)"],
                ["payAfterLogout", "Pay after logout"],
              ].map(([key, label]) => (
                <div className="toggle-row" key={key}>
                  <span className="toggle-row__label">{label}</span>
                  <button
                    type="button"
                    className={`toggle ${clientMethods[key] ? "is-on" : ""}`}
                    aria-pressed={clientMethods[key]}
                    onClick={() => toggleClient(key)}
                  >
                    <span className="toggle__knob" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ---------------- Tax Rates ---------------- */}
      <section className="card card--slate" style={{ marginTop: 20 }}>
        <h2 className="card__title">Tax Rates</h2>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={taxIncluded}
            onChange={() => setTaxIncluded((v) => !v)}
          />
          <span className="checkbox__box">
            <CheckIcon />
          </span>
          Tax calculation included in price
        </label>

        {[1, 2, 3].map((n) => (
          <div className="field-row tax-block" key={n}>
            <div className="field" style={{ marginBottom: 0 }}>
              <label className="field__label">Tax {n} Name</label>
              <input className="input" type="text" defaultValue={`Tax ${n}`} />
            </div>
            <div className="field" style={{ marginBottom: 0 }}>
              <label className="field__label">Percentage</label>
              <input className="input" type="text" defaultValue="0" />
            </div>
          </div>
        ))}

        <h3 className="subheading">Guest Legacy Prices</h3>
        <input className="input" type="text" placeholder="Price per hour (INR)" />
      </section>

      {/* ---------------- Actions ---------------- */}
      <div className="actions">
        <button type="button" className="btn btn--ghost">Cancel</button>
        <button type="button" className="btn btn--primary">Save Changes</button>
      </div>
    </div>
  );
}

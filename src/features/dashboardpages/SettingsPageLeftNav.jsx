import { useState } from "react";
import "../../styles/SettingsPage.css";

// Each item: label, and optional `children` to make it expandable (shows a chevron).
const MENU = [
  {
    label: "Center config",
    children: ["General", "Locations", "Operating hours"],
  },
  {
    label: "Client configuration",
    children: ["Branding", "Pricing", "Currencies"],
  },
  {
    label: "Shop settings",
    children: ["Products", "Categories", "Taxes"],
  },
  {
    label: "Groups config",
    children: ["Roles", "Permissions"],
  },
  {
    label: "Employees",
    children: ["Staff list", "Shifts", "Access cards"],
  },
  {
    label: "Loyalty system",
    children: ["Tiers", "Rewards", "Points rules"],
  },
  {
    label: "Players web portal",
    children: ["Theme", "Pages", "Domain"],
  },
  { label: "Exports" },
  { label: "Bookings" },
  { label: "Web-admin settings" },
  { label: "Player notifications" },
  { label: "Subscription management" },
  { label: "User login" },
  { label: "Integrations" },
  {
    label: "API",
    children: ["API keys", "Webhooks", "Docs"],
  },
  { label: "Account" },
  { label: "Add-Ons Marketplace" },
];

export default function SettingsPageLeftNav() {
  // Index of the currently expanded item (only one open at a time).
  const [openIndex, setOpenIndex] = useState(null);
  // Index of the currently selected/active item (orange highlight).
  const [activeIndex, setActiveIndex] = useState(0);
    const [activeChild, setActiveChild] = useState(null);

  const handleClick = (index, item) => {
    setActiveIndex(index);
    setActiveChild(null);

    if (item.children) {
      // Accordion behaviour: opening one closes the previously open one.
      setOpenIndex((prev) => (prev === index ? null : index));
    } else {
      // A plain item has no panel; collapse any open accordion.
      setOpenIndex(null);
    }
  };

  return (
    <div>
        <h1 className="Settings_Title">Settings</h1>
        <nav className="sidebar" aria-label="Admin navigation">
      <ul className="sidebar__list">
        {MENU.map((item, index) => {
          const isExpandable = Boolean(item.children);
          const isOpen = openIndex === index;
          const isActive = activeIndex === index;

          return (
            <li key={item.label} className="sidebar__item">
              <button
                type="button"
                className={`sidebar__row${isActive ? " is-active" : ""}`}
                onClick={() => handleClick(index, item)}
                aria-expanded={isExpandable ? isOpen : undefined}
              >
                <span className="sidebar__label">{item.label}</span>
                {isExpandable && (
                  <svg
                    className={`sidebar__chevron${isOpen ? " is-open" : ""}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              {isExpandable && (
                <div
                  className={`sidebar__panel${isOpen ? " is-open" : ""}`}
                  role="region"
                >
                  <ul className="sidebar__sublist">
                    {item.children.map((child) => (
                      <li key={child}>
                        <button type="button" 
                         className={`sidebar__subrow${
                          activeChild === `${item.label}/${child}` ? " is-active" : ""
                        }`}
                        onClick={() => setActiveChild(`${item.label}/${child}`)}
                        >
                          {child}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
    </div>
    
  );
}

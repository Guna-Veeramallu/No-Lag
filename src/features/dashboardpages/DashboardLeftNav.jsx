import React from "react";
  import { useState } from "react";
import "../../styles/Dashboardleftnav.css";

/* ----------------------------------------------------------------
   Inline SVG icons (lucide-style strokes — no external dependency)
------------------------------------------------------------------ */
const Icon = {
  Dashboard: (p) => (
    <svg viewBox="0 0 24 24" {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20h5v-6h4v6h5V9.5" /></svg>
  ),
  Monitor: (p) => (
    <svg viewBox="0 0 24 24" {...p}><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M9 20h6M12 16v4" /></svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
  ),
  Activity: (p) => (
    <svg viewBox="0 0 24 24" {...p}><path d="M3 12h4l2.5 7L14 5l2.5 7H21" /></svg>
  ),
  Users: (p) => (
    <svg viewBox="0 0 24 24" {...p}><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="8" r="3.2" /><path d="M20 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.8 5a3.2 3.2 0 0 1 0 6.2" /></svg>
  ),
  Guest: (p) => (
    <svg viewBox="0 0 24 24" {...p}><path d="M14 20v-1.5A3.5 3.5 0 0 0 10.5 15h-3A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="9" cy="8" r="3.2" /><path d="M17 9h4M19 7v4" /></svg>
  ),
  Cart: (p) => (
    <svg viewBox="0 0 24 24" {...p}><circle cx="9" cy="20" r="1.2" /><circle cx="18" cy="20" r="1.2" /><path d="M2.5 4h2l2 12h12l2-8H6.5" /></svg>
  ),
  Orders: (p) => (
    <svg viewBox="0 0 24 24" {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M12 8.5c-1.2 0-2 .6-2 1.4s.8 1.1 2 1.4 2 .6 2 1.4-.8 1.4-2 1.4M12 7.2v1.3M12 14.8v1.3" /></svg>
  ),
  Tag: (p) => (
    <svg viewBox="0 0 24 24" {...p}><path d="M3 12.5V4h8.5L21 13.5 13.5 21 3 12.5Z" /><circle cx="7.5" cy="7.5" r="1.3" /></svg>
  ),
  Campaign: (p) => (
    <svg viewBox="0 0 24 24" {...p}><path d="M3 10v4l13 5V5L3 10Z" /><path d="M16 8.5a3.5 3.5 0 0 1 0 7" /><path d="M5.5 14v3.5a1.5 1.5 0 0 0 3 0V15" /></svg>
  ),
  Stats: (p) => (
    <svg viewBox="0 0 24 24" {...p}><path d="M4 21V3" /><path d="M8 21v-8M13 21V9M18 21v-5" /></svg>
  ),
   Setting: (p) => (
    <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4.8995 4.8995V8.41422L2.41422 10.8995L4.8995 13.3848V16.8995H8.41422L10.8995 19.3848L13.3848 16.8995H16.8995V13.3848L19.3848 10.8995L16.8995 8.41422V4.8995H13.3848L10.8995 2.41422L8.41422 4.8995H4.8995Z" /><circle cx="10.8995" cy="10.8995" r="3" /></svg>
  ),
};

/* ----------------------------------------------------------------
   Nav data
------------------------------------------------------------------ */
const NAV = [
  {
    section: null,
    items: [{ id: "dashboard", label: "Dashboard", icon: "Dashboard" }],
  },
  {
    section: "Live Floor",
    items: [
      { id: "pc-list", label: "PC List", icon: "Monitor" },
      { id: "bookings", label: "Bookings", icon: "Calendar" },
      { id: "activity", label: "Activity", icon: "Activity" },
    ],
  },
  {
    section: "Sessions",
    items: [
      { id: "users", label: "Users", icon: "Users" },
      { id: "guests", label: "Guests", icon: "Guest" },
    ],
  },
  {
    section: "Revenue",
    items: [
      { id: "shop", label: "Shop", icon: "Cart" },
      { id: "orders", label: "Orders", icon: "Orders" },
      { id: "coupons", label: "Coupons", icon: "Tag" },
      { id: "campaigns", label: "Campaigns", icon: "Campaign" },
    ],
  },
  {
    section: "Insights",
    items: [
      { id: "statistics", label: "Statistics", icon: "Stats" },
      { id: "settings", label: "Settings", icon: "Setting" },
    ],
  },
];

export default function DashboardLeftNav() {
      const [active, setActive] = useState("pc-list");

  return (

    <aside className="nl-sidebar">
      {/* Brand */}
      <div className="nl-brand"></div>

      {/* Navigation */}
      <nav className="nl-nav">
        {NAV.map((group, gi) => (
          <div className="nl-group" key={gi}>
            {group.section && (
              <span className="nl-group__label">{group.section}</span>
            )}
            <ul className="nl-list">
              {group.items.map((item) => {
                const Glyph = Icon[item.icon];
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`nl-item${isActive ? " is-active" : ""}`}
                      onClick={() => setActive(item.id)}
                    >
                      <span className="nl-item__accent" aria-hidden="true" />
                      <Glyph
                        className="nl-item__icon"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <span className="nl-item__label">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  

  );
}

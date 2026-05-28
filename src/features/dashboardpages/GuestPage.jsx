import React from "react";
import "../../styles/GuestPage.css";

const stats = [
  { label: "Active Sessions", value: "7", sub: "Currently Playing", variant: "default" },
  { label: "Total Today", value: "15", sub: null, variant: "default" },
  { label: "Ended Today", value: "8", sub: null, variant: "purple" },
  { label: "Guests updated to users", value: "8", sub: null, variant: "purple" },
];

const typeFilters = [
  { label: "All 12", active: true },
  { label: "Active 1", active: false },
  { label: "Session Ended 8", active: false },
];

const categoryFilters = [
  { label: "All Types 12", active: true },
  { label: "Walk In", active: false },
  { label: "VIP", active: false },
  { label: "Influencer", active: false },
  { label: "Trial", active: false },
];

const sessions = [
  { session: "Walk-In #214", pc: "PC-2", gpu: "RTX 4070", type: "Walk-In", time: "3h", date: "19-05-2026", clock: "03:22:39 pm", by: "Suresh" },
  { session: "Walk-In #213", pc: "PC-1", gpu: "RTX 4070", type: "Walk-In", time: "3h", date: "19-05-2026", clock: "03:22:39 pm", by: "Suresh" },
  { session: "VIP guest 123", pc: "PC-4", gpu: "RTX 4070", type: "VIP", time: "3h", date: "19-05-2026", clock: "03:22:39 pm", by: "Suresh" },
  { session: "Influencer #12", pc: "PC-7", gpu: "RTX 4070", type: "Influencer", time: "3h", date: "19-05-2026", clock: "03:22:39 pm", by: "Suresh" },
  { session: "Walk-In #214", pc: "PC-2", gpu: "RTX 4070", type: "Walk-In", time: "3h", date: "19-05-2026", clock: "03:22:39 pm", by: "Suresh" },
];

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white"/>
    </svg>
);

export default function GuestPage() {
  return (
    <div className="guests">
      <h1 className="guests__title">Guests</h1>

      {/* Stat cards */}
      <div className="guests__stats">
        {stats.map((s, i) => (
          <div key={i} className={`stat-card stat-card--${s.variant}`}>
            <span className="stat-card__label">{s.label}</span>
            <span className="stat-card__value">{s.value}</span>
            {s.sub && <span className="stat-card__sub">{s.sub}</span>}
          </div>
        ))}
      </div>

      {/* Search + filters */}
      <div className="guests__toolbar">
        <div className="search">
          <span className="search__icon">
            <SearchIcon />
          </span>
          <input
            className="search__input"
            type="text"
            placeholder="Search by sessions, PCs..."
          />
        </div>

        <div className="filter-group">
          {typeFilters.map((f, i) => (
            <button
              key={i}
              className={`chip ${f.active ? "chip--active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="filter-group">
          {categoryFilters.map((f, i) => (
            <button
              key={i}
              className={`chip ${f.active ? "chip--active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="table">
        <div className="table__head">
          <div className="table__cell table__cell--dot" />
          <div className="table__cell">Session</div>
          <div className="table__cell">PC</div>
          <div className="table__cell">Status</div>
          <div className="table__cell">Session Type</div>
          <div className="table__cell">Time Played</div>
          <div className="table__cell">Started At</div>
          <div className="table__cell">Ended At</div>
          <div className="table__cell">Logged In By</div>
        </div>

        <div className="table__body">
          {sessions.map((row, i) => (
            <div key={i} className="table__row">
              <div className="table__cell table__cell--dot">
                <span className="dot" />
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.session}</span>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.pc}</span>
                <span className="cell-muted">{row.gpu}</span>
              </div>
              <div className="table__cell">
                <span className="badge">
                  <span className="badge__dot" />
                  Active
                </span>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.type}</span>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.time}</span>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.date}</span>
                <span className="cell-muted">{row.clock}</span>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.date}</span>
                <span className="cell-muted">{row.clock}</span>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.by}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

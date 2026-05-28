import React from "react";
import "../../styles/GuestPage.css";
import { Button } from "@/components/common";

const stats = [
  { label: "Today's Revenue", value: "₹4230", sub: null, variant: "default" },
  { label: "Total orders", value: "20", sub: "15 completed", variant: "default" },
  { label: "Pending orders", value: "5", sub: "Awaiting fulfilment", variant: "purple" },
  { label: "Refunds", value: "₹0", sub: null, variant: "purple" },
];

const typeFilters = [
  { label: "All orders", active: true },
  { label: "Transactions 8", active: false },
  { label: "Awaiting payment 6", active: false },
  { label: "Awaiting delivery 2", active: false },
  { label: "Post-Pay(locked) 2", active: false },
];


const sessions = [
  { session: "ORD-2900", pc: "PC-2", gpu: "RTX 4070", type: "Walk-In", time: "-", date: "19-05-2026", clock: "10:22:39", number:"3223482", amount:"₹423", by: "..." },
  { session: "ORD-2900", pc: "PC-1", gpu: "RTX 4070", type: "Walk-In", time: "-", date: "19-05-2026", clock: "10:22:39", number:"3223482", amount:"₹423", by: "..." },
  { session: "ORD-2900", pc: "PC-4", gpu: "RTX 4070", type: "VIP", time: "-", date: "19-05-2026", clock: "03:22:39 pm", number:"3223482", amount:"₹423", by: "..." },
];

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white"/>
    </svg>
);

export default function OrderPage() {
  return (
    <div className="guests">
      <h1 className="guests__title">Orders</h1>

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
            placeholder="Search by order, customer or item..."
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
        <div className="Filter-btn">
            <button class="add-order-btn">
              <span class="plus">+</span> Add Order
            </button>
        </div>
      </div>

      {/* Table */}
      <div className="table">
        <div className="table__heads">
          <div className="table__cell">Day/Time</div>
          <div className="table__cell">Order</div>
          <div className="table__cell">Customer</div>
          <div className="table__cell">Action</div>
          <div className="table__cell">Items</div>
          <div className="table__cell">Amount</div>
          <div className="table__cell">Status</div>
          <div className="table__cell">Source</div>
        </div>

        <div className="table__body">
          {sessions.map((row, i) => (
            <div key={i} className="table__rows">
              {/* <div className="table__cell table__cell--dot">
                <span className="dot" />
              </div> */}
              <div className="table__cell">
                <span className="cell-strong">{row.date}</span>
                <span className="cell-muted">{row.clock}, <span>{row.number}</span></span>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.session}</span>
              </div>
              <div className="table__cell">
                <div className="customer_cell">
                    <div className="customer_id">SK</div>
                    <div className="customer_details">
                        <span className="cell-strong">Sudheer Karna</span>
                        <span className="cell-muted">+91 12934 23 2 1 1</span>
                    </div>
                </div>
              </div>
              <div className="table__cell">
                <span className="cell-strong">{row.time}</span>
              </div>
              <div className="table__cell">
                <span className="cell-muted">4 items</span>
                <span className="cell-muted">Coca-Cola 250ml, Lays...</span>
              </div>
              
              <div className="table__cell">
                <span className="cell-muted">{row.amount}</span>
              </div>
              <div className="table__cell">
                <span className="badge">
                  <span className="badge__dot" />
                  Completed
                </span>
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

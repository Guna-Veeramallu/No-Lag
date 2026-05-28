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
  { label: "All Coupons", active: true },
  { label: "Active 8", active: false },
  { label: "Expired 1", active: false },
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

export default function CouponsPage() {
  return (
    <div className="guests">
      <h1 className="guests__title">Coupons</h1>
      {/* Search + filters */}
      <div className="guests__toolbar">
        <div className="search">
          <span className="search__icon">
            <SearchIcon />
          </span>
          <input
            className="search__input"
            type="text"
            placeholder="Search Coupon Code..."
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
              Add New Coupon
            </button>
        </div>
      </div>
      <div className="promo">
        <div className="promo-card">
        <div className="promo-card__top">
            <h2 className="promo-card__code">WEEKEND20</h2>
            <span className="promo-card__badge promo-card__badge_active">
                <span className="promo-card__badge-dot promo-card__badge-dot-active" />
                Active
            </span>
        </div>
        <p className="promo-card__discount">
            <span className="promo-card__discount-value">10%</span>
            <span className="promo-card__discount-unit">off</span>
        </p>
        <p className="promo-card__used">8 Used</p>
        <p className="promo-card__expiry promo-card__expiry_yellow">Expires on 30th June 2026</p>
        </div>
        <div className="promo-card">
        <div className="promo-card__top">
            <h2 className="promo-card__code">WEEKEND20</h2>
            <span className="promo-card__badge promo-card__badge_expire">
                <span className="promo-card__badge-dot promo-card__badge-dot-expire" />
                Expired
            </span>
        </div>
        <p className="promo-card__discount">
            <span className="promo-card__discount-value">10%</span>
            <span className="promo-card__discount-unit">off</span>
        </p>
        <p className="promo-card__used">8 Used</p>
        <p className="promo-card__expiry promo-card__expiry_red">Expired on 20th May 2026</p>
        </div>
        <div className="promo-card">
        <div className="promo-card__top">
            <h2 className="promo-card__code">WEEKEND20</h2>
            <span className="promo-card__badge promo-card__badge_active">
                <span className="promo-card__badge-dot promo-card__badge-dot-active" />
                Active
            </span>
        </div>
        <p className="promo-card__discount">
            <span className="promo-card__discount-value">10%</span>
            <span className="promo-card__discount-unit">off</span>
        </p>
        <p className="promo-card__used">8 Used</p>
        <p className="promo-card__expiry promo-card__expiry_yellow">Expires on 30th June 2026</p>
        </div>
        <div className="promo-card">
        <div className="promo-card__top">
            <h2 className="promo-card__code">WEEKEND20</h2>
            <span className="promo-card__badge promo-card__badge_active">
                <span className="promo-card__badge-dot promo-card__badge-dot-active" />
                Active
            </span>
        </div>
        <p className="promo-card__discount">
            <span className="promo-card__discount-value">10%</span>
            <span className="promo-card__discount-unit">off</span>
        </p>
        <p className="promo-card__used">8 Used</p>
        <p className="promo-card__expiry promo-card__expiry_yellow">Expires on 30th June 2026</p>
        </div>
      </div>


    </div>
  );
}

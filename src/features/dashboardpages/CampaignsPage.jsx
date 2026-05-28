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
  { label: "All Campaigns", active: true },
  { label: "Tournaments", active: false },
  { label: "Promos", active: false },
  { label: "Events", active: false },
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

export default function CampaignsPage() {
  return (
    <div className="guests">
      <h1 className="guests__title">Campaigns</h1>
      {/* Search + filters */}
      <div className="guests__toolbar">
        <div className="search">
          <span className="search__icon">
            <SearchIcon />
          </span>
          <input
            className="search__input"
            type="text"
            placeholder="Search Campaigns..."
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
              Add New Campaign
            </button>
        </div>
      </div>
      
      <div class="stage">
        <div class="card">
        
        <div class="card__top">
            <div class="card__titles">
            <h1 class="card__title">Weekend discounts</h1>
            <p class="card__category">Discounts</p>
            </div>

            <span class="badge badge_active">
            <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
            Active
            </span>
        </div>

        <p class="card__headline">
            <span class="card__value">20%</span>
            <span class="card__unit">off</span>
        </p>
        <p class="card__desc">
            20% off everything every Saturday and Sunday. Auto-applied at checkout.
        </p>
        <div class="actions">
            <button type="button" class="actions__btn actions__btn--active">Edit</button>
            <button type="button" class="actions__btn">Pause</button>
            <button type="button" class="actions__btn">Delete</button>
        </div>
        </div>
        <div class="card">
        
        <div class="card__top">
            <div class="card__titles">
            <h1 class="card__title">Weekend discounts</h1>
            <p class="card__category">Discounts</p>
            </div>

            <span class="badge badge_active">
            <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
            Active
            </span>
        </div>

        <p class="card__headline">
            <span class="card__value">20%</span>
            <span class="card__unit">off</span>
        </p>
        <p class="card__desc">
            20% off everything every Saturday and Sunday. Auto-applied at checkout.
        </p>
        <div class="actions">
            <button type="button" class="actions__btn actions__btn--active">Edit</button>
            <button type="button" class="actions__btn">Pause</button>
            <button type="button" class="actions__btn">Delete</button>
        </div>
        </div>
        <div class="card">
        
        <div class="card__top">
            <div class="card__titles">
            <h1 class="card__title">Weekend discounts</h1>
            <p class="card__category">Discounts</p>
            </div>

            <span class="badge badge_active">
            <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
            Active
            </span>
        </div>

        <p class="card__headline">
            <span class="card__value">20%</span>
            <span class="card__unit">off</span>
        </p>
        <p class="card__desc">
            20% off everything every Saturday and Sunday. Auto-applied at checkout.
        </p>
        <div class="actions">
            <button type="button" class="actions__btn actions__btn--active">Edit</button>
            <button type="button" class="actions__btn">Pause</button>
            <button type="button" class="actions__btn">Delete</button>
        </div>
        </div>
        <div class="card">
        
        <div class="card__top">
            <div class="card__titles">
            <h1 class="card__title">Weekend discounts</h1>
            <p class="card__category">Discounts</p>
            </div>

            <span class="badge badge_active">
            <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
            Active
            </span>
        </div>

        <p class="card__headline">
            <span class="card__value">20%</span>
            <span class="card__unit">off</span>
        </p>
        <p class="card__desc">
            20% off everything every Saturday and Sunday. Auto-applied at checkout.
        </p>
        <div class="actions">
            <button type="button" class="actions__btn actions__btn--active">Edit</button>
            <button type="button" class="actions__btn">Pause</button>
            <button type="button" class="actions__btn">Delete</button>
        </div>
        </div>
     </div>


    </div>
  );
}

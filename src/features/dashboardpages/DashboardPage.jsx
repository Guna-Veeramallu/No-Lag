import React from "react";
import "../../styles/DashboardPage.css";

export default function DashboardPage() {
  return (
    <div className="DashboardMain">
      <div className="Dashboard_Head">
        <div><h1 className="dashboard__title">Dashboard</h1></div>
        <div className="Dashboard_Btns">
            <button class="add-order-btnB">
                Edit Dashboard
            </button>

            <button class="add-order-btn">
                Add Widget
            </button>
        </div>
      </div>
      <div class="dashboard">
    {/* <!-- ============ CENTER FEED ============ --> */}
    <div class="card">
      <div class="card__head">
        <h2 class="card__title">Center feed</h2>
        <button class="icon-btn" aria-label="More options">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="12" cy="19" r="1.6" />
          </svg>
        </button>
      </div>

      <ul class="feed">
        <li class="feed__item">
          <span class="dot dot--blue"></span>
          <div class="feed__body">
            <p class="feed__text">Session started: PC-04 by Sudhir</p>
            <span class="feed__time">2m ago</span>
          </div>
        </li>
        <li class="feed__item">
          <span class="dot dot--green"></span>
          <div class="feed__body">
            <p class="feed__text">Payment confirmed: ₹500.00 for Package A</p>
            <span class="feed__time">5m ago</span>
          </div>
        </li>
        <li class="feed__item">
          <span class="dot dot--amber"></span>
          <div class="feed__body">
            <p class="feed__text">Command executed: Restart PC-12</p>
            <span class="feed__time">12m ago</span>
          </div>
        </li>
        <li class="feed__item">
          <span class="dot dot--purple"></span>
          <div class="feed__body">
            <p class="feed__text">Chat message: "Need help with printer"</p>
            <span class="feed__time">15m ago</span>
          </div>
        </li>
        <li class="feed__item">
          <span class="dot dot--pink"></span>
          <div class="feed__body">
            <p class="feed__text">Prize redeemed: Free Coffee by User44</p>
            <span class="feed__time">20m ago</span>
          </div>
        </li>
      </ul>
    </div>

    {/* <!-- ============ UPCOMING RESERVATIONS ============ --> */}
    <div class="card card--glow">
      <div class="card__head">
        <h2 class="card__title">Upcoming reservations</h2>
        <div class="toggle">
          <button class="toggle__btn is-active">Today</button>
          <button class="toggle__btn">Tomorrow</button>
        </div>
      </div>

      <div class="rows">
        <div class="row row--reservation">
          <span class="time-badge">14:00</span>
          <div class="row__main">
            <p class="row__title">PC-05</p>
            <span class="row__sub">Duration: 2 hours</span>
          </div>
          <button class="link-btn">View</button>
        </div>

        <div class="row row--reservation">
          <span class="time-badge">15:30</span>
          <div class="row__main">
            <p class="row__title">PC-02</p>
            <span class="row__sub">Duration: 1 hour</span>
          </div>
          <button class="link-btn">View</button>
        </div>
      </div>
    </div>

    {/* <!-- ============ DEVICE DASHBOARD ============ --> */}
    <div class="card">
      <div class="card__head">
        <h2 class="card__title">Device dashboard</h2>
        <div class="counts">
          <span class="count"><span class="dot dot--green"></span>Online: 12</span>
          <span class="count"><span class="dot dot--red"></span>Offline: 2</span>
        </div>
      </div>

      <div class="rows">
        <div class="row row--device">
          <span class="device__name">
            <svg class="device__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            PC-01
          </span>
          <div class="row__end">
            <span class="badge badge--online">Online</span>
            <span class="user-chip">
              <svg class="user-chip__icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
              sud sud
            </span>
          </div>
        </div>

        <div class="row row--device">
          <span class="device__name">
            <svg class="device__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            PC-02
          </span>
          <div class="row__end">
            <span class="badge badge--offline">Offline</span>
          </div>
        </div>

        <div class="row row--device">
          <span class="device__name">
            <svg class="device__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            PC-03
          </span>
          <div class="row__end">
            <span class="badge badge--online">Online</span>
            <span class="user-chip">
              <svg class="user-chip__icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
              Guest_42
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- ============ USER TIME STATUS ============ --> */}
    <div class="card">
      <div class="card__head">
        <h2 class="card__title">User time status</h2>
      </div>

      <div class="rows">
        <div class="row row--user">
          <span class="avatar avatar--active">
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
          </span>
          <div class="row__main">
            <p class="row__title">sud sud</p>
            <span class="row__sub">Active on PC-01</span>
          </div>
          <div class="time-remaining">
            <span class="time-remaining__value time-remaining__value--green">1h 45m</span>
            <span class="time-remaining__label">Remaining</span>
          </div>
        </div>

        <div class="row row--user">
          <span class="avatar">
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
          </span>
          <div class="row__main">
            <p class="row__title">Guest_12</p>
            <span class="row__sub">Active on PC-15</span>
          </div>
          <div class="time-remaining">
            <span class="time-remaining__value time-remaining__value--gold">0h 15m</span>
            <span class="time-remaining__label">Remaining</span>
          </div>
        </div>

        <div class="row row--user">
          <span class="avatar">
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
          </span>
          <div class="row__main">
            <p class="row__title">Guest_12</p>
            <span class="row__sub">Active on PC-15</span>
          </div>
          <div class="time-remaining">
            <span class="time-remaining__value time-remaining__value--gold">0h 15m</span>
            <span class="time-remaining__label">Remaining</span>
          </div>
        </div>
      </div>
    </div>

  </div>
    </div>
  );
}

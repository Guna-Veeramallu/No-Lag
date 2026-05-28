import React, { useState, useRef, useEffect } from "react";
import "../../styles/DashboardRghtTopNavBar.css";

import AVATAR from '../images/GunaPSP.png';

/* ----------------------- Icons (inline SVG, no deps) ----------------------- */
const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white"/>
    </svg>
);
const BellIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.78125 20.0044C9.94847 20.294 10.189 20.5345 10.4786 20.7017C10.7682 20.8689 11.0967 20.9569 11.4311 20.9569C11.7655 20.9569 12.0941 20.8689 12.3837 20.7017C12.6733 20.5345 12.9138 20.294 13.081 20.0044" stroke="white" stroke-width="1.90518" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.10728 14.5995C2.98284 14.7359 2.90072 14.9055 2.8709 15.0877C2.84109 15.2699 2.86487 15.4568 2.93935 15.6258C3.01383 15.7947 3.1358 15.9384 3.29042 16.0393C3.44505 16.1402 3.62566 16.194 3.81029 16.1941H19.0517C19.2363 16.1942 19.417 16.1406 19.5717 16.0399C19.7264 15.9392 19.8485 15.7957 19.9232 15.6268C19.9979 15.458 20.0219 15.2711 19.9923 15.0889C19.9627 14.9067 19.8809 14.737 19.7566 14.6004C18.4897 13.2944 17.1465 11.9065 17.1465 7.6208C17.1465 6.10495 16.5443 4.65118 15.4725 3.57931C14.4006 2.50744 12.9468 1.90527 11.431 1.90527C9.91514 1.90527 8.46137 2.50744 7.3895 3.57931C6.31764 4.65118 5.71547 6.10495 5.71547 7.6208C5.71547 11.9065 4.37136 13.2944 3.10728 14.5995Z" stroke="white" stroke-width="1.90518" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
const SettingsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z" fill="white"/>
    </svg>
);
const ChevronDown = ({ className }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const CreditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);
const HelpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);


const initialNotifications = [
  { id: 1, text: <><strong>Nexus Café #12</strong> just went live with 18 active PCs.</>, time: "2 min ago", read: false },
  { id: 2, text: <><strong>Riya S.</strong> requested a session extension on PC-07.</>, time: "25 min ago", read: false },
  { id: 3, text: <>Your weekly utilization report is ready to view.</>, time: "1 hr ago", read: false },
  { id: 4, text: <><strong>Payment received</strong> — ₹2,400 from Table 4.</>, time: "3 hr ago", read: true },
];

export default function DashboardRghtTopNavBar() {
  const [openPop, setOpenPop] = useState(null); // 'notif' | 'profile' | null
  const [notifs, setNotifs] = useState(initialNotifications);
  const rootRef = useRef(null);

  const unread = notifs.filter((n) => !n.read).length;

  // Close on click-outside and Escape
  useEffect(() => {
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpenPop(null);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpenPop(null); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = (which) => setOpenPop((cur) => (cur === which ? null : which));
  const markAllRead = () => setNotifs((ns) => ns.map((n) => ({ ...n, read: true })));

  return (
    <div className="tnb-root" ref={rootRef}>
      <div className="tnb-bar">
        {/* Search bar with glass effect */}
        <label className="tnb-search">
          <span className="tnb-search-icon"><SearchIcon /></span>
          <input type="text" placeholder="Search for PCs, Users..." aria-label="Search" />
        </label>

        {/* Right actions */}
        <div className="tnb-actions">
          <button className="tnb-live" type="button">
            <span className="tnb-live-dot" />
            Live
          </button>

          {/* Notification bell + popover */}
          <div className="tnb-pop-wrap">
            <button
              type="button"
              className={`tnb-icon-btn ${openPop === "notif" ? "tnb-active" : ""}`}
              aria-label="Notifications"
              aria-haspopup="true"
              aria-expanded={openPop === "notif"}
              onClick={() => toggle("notif")}
            >
              <BellIcon />
              {unread > 0 && <span className="tnb-badge" />}
            </button>

            {openPop === "notif" && (
              <div className="tnb-pop" role="dialog" aria-label="Notifications">
                <div className="tnb-pop-head">
                  <h3 className="tnb-pop-title">Notifications {unread > 0 && `(${unread})`}</h3>
                  <button className="tnb-pop-clear" onClick={markAllRead}>Mark all read</button>
                </div>
                <div className="tnb-notif-list">
                  {notifs.map((n) => (
                    <div className="tnb-notif" key={n.id}>
                      <span className={`tnb-notif-dot ${n.read ? "read" : ""}`} />
                      <div className="tnb-notif-body">
                        <p className="tnb-notif-text">{n.text}</p>
                        <span className="tnb-notif-time">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tnb-pop-foot">
                  <button>View all notifications</button>
                </div>
              </div>
            )}
          </div>

          <button className="tnb-icon-btn" type="button" aria-label="Settings">
            <SettingsIcon />
          </button>

          {/* Profile + popover */}
          <div className="tnb-pop-wrap">
            <button
              type="button"
              className="tnb-profile"
              aria-label="Account menu"
              aria-haspopup="true"
              aria-expanded={openPop === "profile"}
              onClick={() => toggle("profile")}
            >
              <img className="tnb-avatar" src={AVATAR} alt="Profile" />
              <ChevronDown className={`tnb-chevron ${openPop === "profile" ? "tnb-open" : ""}`} />
            </button>

            {openPop === "profile" && (
              <div className="tnb-pop tnb-pop-sm" role="menu" aria-label="Account">
                <div className="tnb-profile-card">
                  <img src={AVATAR} alt="" />
                  <div>
                    <p className="tnb-profile-name">Guna Veeramallu</p>
                    <p className="tnb-profile-email">guna.veeramallu@sticsoftsolutions.com</p>
                  </div>
                </div>
                <div className="tnb-menu">
                  <button className="tnb-menu-item" role="menuitem"><UserIcon /> My Profile</button>
                  <button className="tnb-menu-item" role="menuitem"><CreditIcon /> Billing &amp; Credits</button>
                  <button className="tnb-menu-item" role="menuitem"><HelpIcon /> Help &amp; Support</button>
                  <div className="tnb-menu-sep" />
                  <button className="tnb-menu-item danger" role="menuitem"><LogoutIcon /> Sign out</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { createContext, useContext } from 'react';

export const LanguageContext = createContext('en');

export const useTranslation = () => {
  const lang = useContext(LanguageContext) || 'en';
  return (key, params) => {
    let text = translations[lang] && translations[lang][key] ? translations[lang][key] : (translations['en'][key] || key);
    if (params) {
      Object.keys(params).forEach(p => {
        text = text.replace(`{${p}}`, params[p]);
      });
    }
    return text;
  };
};

export const translations = {
  en: {
    // --- Global ---
    logout: "Logout",
    fruits: "Fruits",
    vegetables: "Vegetables",
    search: "Search",
    qty: "Qty",
    total: "Total",
    date: "Date",
    just_now: "Just now",

    // --- Customer Dashboard ---
    marketplace: "🏪 Marketplace",
    my_orders: "📦 My Orders",
    notifications: "🔔 Notifications",
    fresh_produce_market: "Fresh Produce Market",
    find_nearest_farms: "Find the nearest farms to deliver to your location.",
    buy_now: "Buy Now",
    your_orders: "Your Orders",
    no_orders_yet: "You haven't placed any orders yet.",
    order_placed: "Order Placed",
    order_number: "Order #",
    status: "Status",
    status_pending: "Pending Vendor ⏳",
    status_accepted: "Accepted ✅",
    status_rejected: "Rejected ❌",
    status_reassigned: "Reassigning Vendor ⏳",
    status_vendor_unavailable: "Vendor Unavailable ⚠️",
    order_arrived: "Your order has arrived! 🎉",
    order_on_the_way: "Your order is on the way. Estimated arrival in {minutes} {unit}.",
    hide_map: "Hide Map ⬆️",
    track_on_map: "Track on Map 📍",
    order_accepted_congrats: "Congratulations! Your order has been accepted. 😊",
    new_vendor_contact: "New Vendor Contact:",
    vendor_contact: "Vendor Contact:",
    mark_as_received: "Mark as Received",
    order_rejected_msg: "Sorry! Your order was rejected by all nearby vendors. 😢",
    no_notifications: "You have no new notifications.",

    // --- Vendor Dashboard ---
    vendor_dashboard: "Vendor Dashboard",
    manage_inventory_msg: "Manage your inventory and requested orders.",
    edit_profile: "Edit Profile",
    tab_inventory: "📦 Inventory",
    tab_incoming: "🔔 Incoming Requests",
    tab_accepted: "✅ Accepted Orders",
    tab_notifications: "📩 Notifications",
    no_pending_orders: "No pending orders.",
    no_accepted_orders: "No accepted orders.",
    customer: "Customer",
    order_amount: "Order Amount",
    order_items: "Order Items:",
    accept_order: "Accept Order",
    reject_routing: "Reject Routing",
    reject_order: "Reject Order",
    contact_customer: "Contact Customer",
    live_location: "📍 Live:",
    fetching_location: "Fetching your live location... Please try again in a few seconds.",

    // --- Vendor Inventory ---
    select_produce: "Select Available Produce",
    selling_today: "What are you selling today?",
    total_value: "Total Value",
    save_inventory: "Save Inventory",
    saving: "Saving...",
    quantity_available: "Quantity Available",
    remove_item: "Remove item",

    // --- Notifications Keys ---
    notif_new_order: "New order request from {name}",
    notif_order_placed: "Order #{id} placed successfully! We are finding your nearest vendor.",
    notif_order_reassigned: "Due to some reasons, another vendor is now delivering your order.",
    notif_order_accepted: "Mee order accept ayindi.",
    notif_order_rejected: "Mee order reject ayindi."
  },
  te: {
    // --- Global ---
    logout: "లాగ్అవుట్",
    fruits: "పండ్లు",
    vegetables: "కూరగాయలు",
    search: "వెతకండి",
    qty: "పరిమాణం",
    total: "మొత్తం",
    date: "తేదీ",
    just_now: "ఇప్పుడే",

    // --- Customer Dashboard ---
    marketplace: "🏪 మార్కెట్",
    my_orders: "📦 నా ఆర్డర్‌లు",
    notifications: "🔔 నోటిఫికేషన్లు",
    fresh_produce_market: "తాజా మార్కెట్",
    find_nearest_farms: "మీ ప్రాంతానికి డెలివరీ చేసే సమీప వ్యవసాయ క్షేత్రాలను కనుగొనండి.",
    buy_now: "ఇప్పుడే కొనండి",
    your_orders: "మీ ఆర్డర్‌లు",
    no_orders_yet: "మీరు ఇంకా ఎలాంటి ఆర్డర్‌లు చేయలేదు.",
    order_placed: "ఆర్డర్ చేసిన తేదీ",
    order_number: "ఆర్డర్ నంబర్",
    status: "స్థితి",
    status_pending: "వెండర్ కోసం వేచి ఉంది ⏳",
    status_accepted: "అంగీకరించబడింది ✅",
    status_rejected: "తిరస్కరించబడింది ❌",
    status_reassigned: "కొత్త వెండర్‌ని వెతుకుతోంది ⏳",
    status_vendor_unavailable: "వెండర్ అందుబాటులో లేరు ⚠️",
    order_arrived: "మీ ఆర్డర్ చేరుకుంది! 🎉",
    order_on_the_way: "మీ ఆర్డర్ దారిలో ఉంది. {minutes} {unit} లో చేరుకుంటుంది.",
    hide_map: "మ్యాప్ దాచండి ⬆️",
    track_on_map: "మ్యాప్‌లో ట్రాక్ చేయండి 📍",
    order_accepted_congrats: "అభినందనలు! మీ ఆర్డర్ అంగీకరించబడింది. 😊",
    new_vendor_contact: "కొత్త వెండర్ పరిచయం:",
    vendor_contact: "వెండర్ పరిచయం:",
    mark_as_received: "అందుకున్నట్లు నిర్ధారించండి",
    order_rejected_msg: "క్షమించండి! సమీప వెండర్‌లు మీ ఆర్డర్‌ను తిరస్కరించారు. 😢",
    no_notifications: "మీకు కొత్త నోటిఫికేషన్లు ఏమీ లేవు.",

    // --- Vendor Dashboard ---
    vendor_dashboard: "వెండర్ డాష్‌బోర్డ్",
    manage_inventory_msg: "మీ ఇన్వెంటరీ మరియు ఆర్డర్‌లను నిర్వహించండి.",
    edit_profile: "ప్రొఫైల్ ఎడిట్ చేయండి",
    tab_inventory: "📦 ఇన్వెంటరీ",
    tab_incoming: "🔔 కొత్త ఆర్డర్‌లు",
    tab_accepted: "✅ అంగీకరించిన ఆర్డర్‌లు",
    tab_notifications: "📩 నోటిఫికేషన్లు",
    no_pending_orders: "పెండింగ్ ఆర్డర్‌లు లేవు.",
    no_accepted_orders: "అంగీకరించిన ఆర్డర్‌లు లేవు.",
    customer: "కస్టమర్",
    order_amount: "ఆర్డర్ మొత్తం",
    order_items: "ఆర్డర్ వస్తువులు:",
    accept_order: "అంగీకరించండి",
    reject_routing: "తిరస్కరించండి",
    reject_order: "ఆర్డర్ తిరస్కరించండి",
    contact_customer: "కస్టమర్‌కి కాల్ చేయండి",
    live_location: "📍 లైవ్:",
    fetching_location: "లైవ్ లోకేషన్ కోసం వేచి ఉంది... దయచేసి మళ్లీ ప్రయత్నించండి.",

    // --- Vendor Inventory ---
    select_produce: "అందుబాటులో ఉన్న వస్తువులు ఎంచుకోండి",
    selling_today: "ఈ రోజు మీరు ఏవి అమ్ముతున్నారు?",
    total_value: "మొత్తం విలువ",
    save_inventory: "సేవ్ చేయండి",
    saving: "సేవ్ అవుతోంది...",
    quantity_available: "అందుబాటులో ఉన్న పరిమాణం",
    remove_item: "తీసివేయండి",

    // --- Notifications Keys ---
    notif_new_order: "{name} నుండి కొత్త ఆర్డర్",
    notif_order_placed: "ఆర్డర్ #{id} విజయవంతంగా నమోదైంది! సమీప వెండర్‌ను కనుగొంటున్నాము.",
    notif_order_reassigned: "కొన్ని కారణాల వల్ల, మరో వెండర్ ఇప్పుడు మీ ఆర్డర్‌ను డెలివరీ చేస్తున్నారు.",
    notif_order_accepted: "మీ ఆర్డర్ అంగీకరించబడింది.",
    notif_order_rejected: "మీ ఆర్డర్ తిరస్కరించబడింది."
  }
};

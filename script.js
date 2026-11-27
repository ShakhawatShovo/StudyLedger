/* ============================================================
   StudyLedger - Vanilla JS
   ============================================================ */

(function () {
  'use strict';

  // ---------- i18n ----------
  const i18n = {
    bn: {
      appTitle: 'StudyLedger',
      routineTitle: 'সাপ্তাহিক রুটিন',
      routineSubtitle: 'আপনার সপ্তাহের পড়াশোনার পরিকল্পনা তৈরি করুন',
      studentInfo: 'শিক্ষার্থীর তথ্য',
      name: 'নাম',
      class: 'ক্লাস',
      namePlaceholder: 'আপনার নাম',
      classPlaceholder: 'যেমন: ৯ / SSC',
      routines: 'রুটিনসমূহ',
      newRoutine: 'নতুন রুটিন',
      copyDay: 'দিন কপি',
      save: 'সেভ',
      generateImages: 'ইমেজ তৈরি করুন',
      generateHint: 'প্রিন্ট ও লক স্ক্রিনের জন্য সুন্দর ইমেজ তৈরি করুন',
      previewLandscape: 'Landscape প্রিভিউ',
      previewPortrait: 'Portrait প্রিভিউ',
      logTitle: 'আজকের লগ',
      logSubtitle: 'রুটিন অনুযায়ী আজ কী করেছেন লিখুন',
      date: 'তারিখ',
      activeRoutine: 'সক্রিয় রুটিন',
      todaysSubjects: 'আজকের বিষয়সমূহ',
      submitLog: 'লগ সেভ করুন',
      todaysReport: 'আজকের রিপোর্ট',
      shareWhatsApp: 'WhatsApp-এ পাঠাও',
      copyTable: 'টেবিল কপি',
      downloadImg: 'ইমেজ',
      downloadPdf: 'PDF',
      historyTitle: 'হিস্ট্রি ও সারাংশ',
      historySubtitle: 'আগের লগ ও সাপ্তাহিক অগ্রগতি দেখুন',
      daysLogged: 'দিন লগ',
      currentStreak: 'বর্তমান স্ট্রিক',
      bestStreak: 'সেরা স্ট্রিক',
      pastLogs: 'আগের লগসমূহ',
      settingsTitle: 'সেটিংস',
      appearance: 'চেহারা',
      colorTheme: 'কালার থিম',
      darkMode: 'ডার্ক মোড',
      data: 'ডেটা',
      backupHint: 'ব্রাউজার ডেটা ক্লিয়ার করলে সব মুছে যাবে। মাঝে মাঝে ব্যাকআপ নিন।',
      exportData: 'Export (JSON)',
      importData: 'Import (JSON)',
      clearAll: 'সব ডেটা মুছুন',
      navRoutine: 'রুটিন',
      navLog: 'লগ',
      navHistory: 'হিস্ট্রি',
      navSettings: 'সেটিংস',
      downloadPng: 'PNG ডাউনলোড',
      copyDayTitle: 'দিন কপি করুন',
      copyFrom: 'কোন দিন থেকে কপি করবেন?',
      copyTo: 'কোন দিনে কপি করবেন?',
      copy: 'কপি করুন',
      editLog: 'লগ এডিট',
      delete: 'মুছুন',
      days: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'],
      daysFull: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
      time: 'সময়',
      subject: 'সাবজেক্ট / কাজ',
      addSlot: '+ সারি যোগ করুন',
      active: 'সক্রিয়',
      noRoutine: 'কোনো রুটিন নেই। নতুন তৈরি করুন।',
      noLogs: 'এখনো কোনো লগ নেই।',
      noSubjects: 'আজকের জন্য কোনো সাবজেক্ট নেই।',
      saved: 'সেভ হয়েছে!',
      copied: 'কপি হয়েছে!',
      deleted: 'মুছে ফেলা হয়েছে',
      confirmClear: 'সব ডেটা মুছে যাবে। নিশ্চিত?',
      confirmDeleteLog: 'এই লগ মুছে ফেলবেন?',
      enterName: 'নাম দিন',
      selectRoutine: 'একটি রুটিন বেছে নিন',
      routineName: 'রুটিনের নাম',
      defaultRoutine: 'আমার রুটিন',
      templates: 'টেমপ্লেট',
      chooseTemplate: 'টেমপ্লেট বেছে নিন',
      weeklyProgress: 'এই সপ্তাহের অগ্রগতি',
      examCountdown: 'পরীক্ষা পর্যন্ত বাকি',
      examSettings: 'পরীক্ষার কাউন্টডাউন',
      examName: 'পরীক্ষার নাম',
      examNamePlaceholder: 'যেমন: SSC 2027',
      examDate: 'তারিখ',
      clearExam: 'মুছুন',
      installApp: 'অ্যাপ ইনস্টল করুন',
      installHint: 'হোম স্ক্রিনে যোগ করে অ্যাপের মতো ব্যবহার করুন।',
      installNow: 'ইনস্টল করুন',
      daysLeft: 'দিন বাকি',
      examToday: 'আজ পরীক্ষা!',
      examPassed: 'পরীক্ষা শেষ',
      noSubjectStats: 'এই সপ্তাহে এখনো লগ নেই।',
      useTemplate: 'ব্যবহার করুন',
      shareRoutine: 'শিক্ষার্থীদের সাথে শেয়ার',
      shareRoutineHint: 'টিউটর/শিক্ষক: কোড কপি করে শিক্ষার্থীদের পাঠান। তারা ইমপোর্ট করে একই রুটিন পাবে।',
      shareCodeHelp: 'এই কোডটি কপি করে WhatsApp/মেসেজে শিক্ষার্থীদের পাঠান। তারা StudyLedger-এ গিয়ে ইমপোর্ট করবে।',
      importTutorTitle: 'টিউটরের রুটিন ইমপোর্ট',
      importTutorHint: 'শিক্ষক যে কোড দিয়েছেন সেটা নিচে পেস্ট করুন',
      importCode: 'ইমপোর্ট করুন',
      importSuccess: 'রুটিন ইমপোর্ট হয়েছে!',
      importFail: 'কোড সঠিক নয়',
      timeCol: 'সময়',
      period: 'পিরিয়ড',

    },
    en: {
      appTitle: 'StudyLedger',
      routineTitle: 'Weekly Routine',
      routineSubtitle: 'Create your weekly study plan',
      studentInfo: 'Student Info',
      name: 'Name',
      class: 'Class',
      namePlaceholder: 'Your name',
      classPlaceholder: 'e.g. 9 / SSC',
      routines: 'Routines',
      newRoutine: 'New Routine',
      copyDay: 'Copy Day',
      save: 'Save',
      generateImages: 'Generate Images',
      generateHint: 'Create beautiful images for print & lock screen',
      previewLandscape: 'Landscape Preview',
      previewPortrait: 'Portrait Preview',
      logTitle: "Today's Log",
      logSubtitle: 'Write what you studied according to routine',
      date: 'Date',
      activeRoutine: 'Active Routine',
      todaysSubjects: "Today's Subjects",
      submitLog: 'Save Log',
      todaysReport: "Today's Report",
      shareWhatsApp: 'Send via WhatsApp',
      copyTable: 'Copy Table',
      downloadImg: 'Image',
      downloadPdf: 'PDF',
      historyTitle: 'History & Summary',
      historySubtitle: 'View past logs and weekly progress',
      daysLogged: 'Days Logged',
      currentStreak: 'Current Streak',
      bestStreak: 'Best Streak',
      pastLogs: 'Past Logs',
      settingsTitle: 'Settings',
      appearance: 'Appearance',
      colorTheme: 'Color Theme',
      darkMode: 'Dark Mode',
      data: 'Data',
      backupHint: 'Clearing browser data will erase everything. Backup occasionally.',
      exportData: 'Export (JSON)',
      importData: 'Import (JSON)',
      clearAll: 'Clear All Data',
      navRoutine: 'Routine',
      navLog: 'Log',
      navHistory: 'History',
      navSettings: 'Settings',
      downloadPng: 'Download PNG',
      copyDayTitle: 'Copy Day',
      copyFrom: 'Copy from which day?',
      copyTo: 'Copy to which days?',
      copy: 'Copy',
      editLog: 'Edit Log',
      delete: 'Delete',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      daysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      time: 'Time',
      subject: 'Subject / Task',
      addSlot: '+ Add row',
      active: 'Active',
      noRoutine: 'No routines yet. Create one.',
      noLogs: 'No logs yet.',
      noSubjects: 'No subjects for today.',
      saved: 'Saved!',
      copied: 'Copied!',
      deleted: 'Deleted',
      confirmClear: 'All data will be erased. Confirm?',
      confirmDeleteLog: 'Delete this log?',
      enterName: 'Enter name',
      selectRoutine: 'Select a routine',
      routineName: 'Routine name',
      defaultRoutine: 'My Routine',
      templates: 'Templates',
      chooseTemplate: 'Choose a template',
      weeklyProgress: 'This week\'s progress',
      examCountdown: 'Days until exam',
      examSettings: 'Exam countdown',
      examName: 'Exam name',
      examNamePlaceholder: 'e.g. SSC 2027',
      examDate: 'Date',
      clearExam: 'Clear',
      installApp: 'Install app',
      installHint: 'Add to home screen and use like an app.',
      installNow: 'Install now',
      daysLeft: 'days left',
      examToday: 'Exam today!',
      examPassed: 'Exam over',
      noSubjectStats: 'No logs this week yet.',
      useTemplate: 'Use',
      shareRoutine: 'Share with students',
      shareRoutineHint: 'Tutor: copy the code and send to students. They import it to get the same routine.',
      shareCodeHelp: 'Copy this code and send via WhatsApp. Students paste it under Import tutor routine.',
      importTutorTitle: 'Import tutor routine',
      importTutorHint: 'Paste the code your teacher shared',
      importCode: 'Import',
      importSuccess: 'Routine imported!',
      importFail: 'Invalid code',
      timeCol: 'Time',
      period: 'Period',

    }
  };

  // ---------- State ----------
  let state = {
    student: { name: '', class: '' },
    routines: [],
    logs: [],
    settings: {
      lang: 'bn',
      theme: 'blue',
      darkMode: false,
      examName: '',
      examDate: ''
    },
    editingRoutineId: null,
    currentDay: 0, // 0=Sun ... 6=Sat
    previewMode: null, // 'landscape' | 'portrait'
    previewEl: null
  };


  const DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  // ---------- Routine Templates ----------
  const TEMPLATES = [
    {
      id: 'ssc-science',
      nameBn: 'এসএসসি সায়েন্স',
      nameEn: 'SSC Science',
      descBn: 'গণিত, পদার্থ, রসায়ন, জীববিজ্ঞান, ইংরেজি',
      descEn: 'Math, Physics, Chemistry, Biology, English',
      days: {
        sun: [{ time: '৪:০০–৫:৩০', subject: 'গণিত' }, { time: '৫:৩০–৭:০০', subject: 'পদার্থবিজ্ঞান' }],
        mon: [{ time: '৪:০০–৫:৩০', subject: 'রসায়ন' }, { time: '৫:৩০–৭:০০', subject: 'ইংরেজি' }],
        tue: [{ time: '৪:০০–৫:৩০', subject: 'জীববিজ্ঞান' }, { time: '৫:৩০–৭:০০', subject: 'গণিত' }],
        wed: [{ time: '৪:০০–৫:৩০', subject: 'পদার্থবিজ্ঞান' }, { time: '৫:৩০–৭:০০', subject: 'বাংলা' }],
        thu: [{ time: '৪:০০–৫:৩০', subject: 'রসায়ন' }, { time: '৫:৩০–৭:০০', subject: 'গণিত' }],
        fri: [{ time: '৪:০০–৬:০০', subject: 'রিভিশন' }],
        sat: [{ time: '৪:০০–৫:৩০', subject: 'ইংরেজি' }, { time: '৫:৩০–৭:০০', subject: 'জীববিজ্ঞান' }]
      }
    },
    {
      id: 'ssc-commerce',
      nameBn: 'এসএসসি কমার্স',
      nameEn: 'SSC Commerce',
      descBn: 'হিসাব, ব্যবসা, অর্থনীতি, ইংরেজি, গণিত',
      descEn: 'Accounting, Business, Economics, English, Math',
      days: {
        sun: [{ time: '৪:০০–৫:৩০', subject: 'হিসাববিজ্ঞান' }, { time: '৫:৩০–৭:০০', subject: 'গণিত' }],
        mon: [{ time: '৪:০০–৫:৩০', subject: 'ব্যবসায় উদ্যোগ' }, { time: '৫:৩০–৭:০০', subject: 'ইংরেজি' }],
        tue: [{ time: '৪:০০–৫:৩০', subject: 'অর্থনীতি' }, { time: '৫:৩০–৭:০০', subject: 'হিসাববিজ্ঞান' }],
        wed: [{ time: '৪:০০–৫:৩০', subject: 'গণিত' }, { time: '৫:৩০–৭:০০', subject: 'বাংলা' }],
        thu: [{ time: '৪:০০–৫:৩০', subject: 'ব্যবসায় উদ্যোগ' }, { time: '৫:৩০–৭:০০', subject: 'ইংরেজি' }],
        fri: [{ time: '৪:০০–৬:০০', subject: 'রিভিশন' }],
        sat: [{ time: '৪:০০–৫:৩০', subject: 'অর্থনীতি' }, { time: '৫:৩০–৭:০০', subject: 'হিসাববিজ্ঞান' }]
      }
    },
    {
      id: 'hsc-science',
      nameBn: 'এইচএসসি সায়েন্স',
      nameEn: 'HSC Science',
      descBn: 'উচ্চতর গণিত, পদার্থ, রসায়ন, ইংরেজি',
      descEn: 'Higher Math, Physics, Chemistry, English',
      days: {
        sun: [{ time: '৬:০০–৮:০০', subject: 'উচ্চতর গণিত' }, { time: '৮:০০–৯:৩০', subject: 'পদার্থবিজ্ঞান' }],
        mon: [{ time: '৬:০০–৮:০০', subject: 'রসায়ন' }, { time: '৮:০০–৯:৩০', subject: 'ইংরেজি' }],
        tue: [{ time: '৬:০০–৮:০০', subject: 'উচ্চতর গণিত' }, { time: '৮:০০–৯:৩০', subject: 'জীববিজ্ঞান' }],
        wed: [{ time: '৬:০০–৮:০০', subject: 'পদার্থবিজ্ঞান' }, { time: '৮:০০–৯:৩০', subject: 'রসায়ন' }],
        thu: [{ time: '৬:০০–৮:০০', subject: 'উচ্চতর গণিত' }, { time: '৮:০০–৯:৩০', subject: 'ইংরেজি' }],
        fri: [{ time: '৬:০০–৮:০০', subject: 'রিভিশন / প্র্যাকটিস' }],
        sat: [{ time: '৬:০০–৮:০০', subject: 'পদার্থবিজ্ঞান' }, { time: '৮:০০–৯:৩০', subject: 'রসায়ন' }]
      }
    },
    {
      id: 'general',
      nameBn: 'সাধারণ স্কুল রুটিন',
      nameEn: 'General School Routine',
      descBn: 'সকাল পড়া + বিকেল হোমওয়ার্ক',
      descEn: 'Morning study + afternoon homework',
      days: {
        sun: [{ time: '৬:৩০–৭:৩০', subject: 'সকালের পড়া' }, { time: '৪:৩০–৬:০০', subject: 'হোমওয়ার্ক' }],
        mon: [{ time: '৬:৩০–৭:৩০', subject: 'সকালের পড়া' }, { time: '৪:৩০–৬:০০', subject: 'হোমওয়ার্ক' }],
        tue: [{ time: '৬:৩০–৭:৩০', subject: 'সকালের পড়া' }, { time: '৪:৩০–৬:০০', subject: 'হোমওয়ার্ক' }],
        wed: [{ time: '৬:৩০–৭:৩০', subject: 'সকালের পড়া' }, { time: '৪:৩০–৬:০০', subject: 'হোমওয়ার্ক' }],
        thu: [{ time: '৬:৩০–৭:৩০', subject: 'সকালের পড়া' }, { time: '৪:৩০–৬:০০', subject: 'হোমওয়ার্ক' }],
        fri: [{ time: '৬:৩০–৭:৩০', subject: 'রিভিশন' }],
        sat: [{ time: '৯:০০–১১:০০', subject: 'সাপ্তাহিক রিভিশন' }]
      }
    }
  ];


  // ---------- Storage helpers ----------
  function loadData() {
    try {
      const raw = localStorage.getItem('studentRoutineData');
      if (raw) {
        const data = JSON.parse(raw);
        state.student = data.student || state.student;
        state.routines = data.routines || [];
        state.logs = data.logs || [];
        state.settings = { ...state.settings, ...(data.settings || {}) };
      }
    } catch (e) {
      console.warn('Load failed', e);
    }
  }

  function saveData() {
    try {
      const data = {
        student: state.student,
        routines: state.routines,
        logs: state.logs,
        settings: state.settings
      };
      localStorage.setItem('studentRoutineData', JSON.stringify(data));
    } catch (e) {
      console.warn('Save failed', e);
      toast('Storage error');
    }
  }

  // ---------- Utils ----------
  function t(key) {
    return i18n[state.settings.lang][key] || i18n.en[key] || key;
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2200);
  }

  function todayStr() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }

  function formatDate(str) {
    if (!str) return '';
    const d = new Date(str + 'T00:00:00');
    const days = t('daysFull');
    return `${days[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  function getActiveRoutine() {
    return state.routines.find(r => r.isActive) || state.routines[0] || null;
  }

  function getDayIndex(dateStr) {
    return new Date(dateStr + 'T00:00:00').getDay();
  }

  // ---------- i18n apply ----------
  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });
    document.getElementById('langLabel').textContent = state.settings.lang === 'bn' ? 'EN' : 'বাং';
    document.documentElement.lang = state.settings.lang === 'bn' ? 'bn' : 'en';
  }

  // ---------- Theme ----------
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.settings.theme);
    if (state.settings.darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      // keep color accent via class or secondary attr
      document.documentElement.style.setProperty('--primary', 
        state.settings.theme === 'green' ? '#10b981' :
        state.settings.theme === 'purple' ? '#8b5cf6' : '#3b82f6');
    } else {
      document.documentElement.removeAttribute('style');
      document.documentElement.setAttribute('data-theme', state.settings.theme);
    }
    document.getElementById('darkModeCheck').checked = state.settings.darkMode;
    document.querySelectorAll('.theme-swatch').forEach(s => {
      s.classList.toggle('active', s.dataset.theme === state.settings.theme);
    });
  }

  // ---------- Navigation ----------
  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.page === page);
    });
    document.querySelectorAll('.desktop-nav .nav-link').forEach(n => {
      n.classList.toggle('active', n.dataset.page === page);
    });
    if (page === 'log') renderLogPage();
    if (page === 'history') renderHistoryPage();
    if (page === 'routine') {
      renderRoutinePage();
      renderExamCountdown();
    }
    if (page === 'settings') loadExamSettingsUI();
  }

  // ---------- Routine Page ----------
  function renderRoutinePage() {
    // student fields
    document.getElementById('studentName').value = state.student.name || '';
    document.getElementById('studentClass').value = state.student.class || '';

    // routine list
    const list = document.getElementById('routineList');
    if (state.routines.length === 0) {
      list.innerHTML = `<p class="hint">${t('noRoutine')}</p>`;
    } else {
      list.innerHTML = state.routines.map(r => `
        <div class="routine-item ${r.isActive ? 'active' : ''}" data-id="${r.id}">
          <div class="name" data-action="edit">${r.name}</div>
          ${r.isActive ? `<span class="badge">${t('active')}</span>` : ''}
          <div class="actions">
            ${!r.isActive ? `<button data-action="activate" title="Activate">✓</button>` : ''}
            <button data-action="edit" title="Edit">✎</button>
            <button data-action="delete" title="Delete">✕</button>
          </div>
        </div>
      `).join('');
    }

    // editor
    const editor = document.getElementById('routineEditor');
    const gen = document.getElementById('generateSection');
    if (state.editingRoutineId) {
      const r = state.routines.find(x => x.id === state.editingRoutineId);
      if (r) {
        editor.style.display = 'block';
        gen.style.display = 'block';
        document.getElementById('editingRoutineName').textContent = r.name;
        renderDaysTabs();
        renderDaySlots();
      }
    } else {
      editor.style.display = 'none';
      gen.style.display = state.routines.length ? 'block' : 'none';
    }
  }

  function renderDaysTabs() {
    const tabs = document.getElementById('daysTabs');
    const days = t('days');
    tabs.innerHTML = days.map((d, i) => `
      <button class="day-tab ${state.currentDay === i ? 'active' : ''}" data-day="${i}">${d}</button>
    `).join('');
  }

  function renderDaySlots() {
    const r = state.routines.find(x => x.id === state.editingRoutineId);
    if (!r) return;
    const key = DAY_KEYS[state.currentDay];
    const slots = r.days[key] || [];
    const container = document.getElementById('daySlots');
    container.innerHTML = slots.map((s, idx) => `
      <div class="slot-row" data-idx="${idx}">
        <input type="text" class="slot-time" placeholder="${t('time')}" value="${s.time || ''}" />
        <input type="text" class="slot-subject" placeholder="${t('subject')}" value="${s.subject || ''}" />
        <button class="remove-slot" data-idx="${idx}">×</button>
      </div>
    `).join('') + `<button class="add-slot-btn">${t('addSlot')}</button>`;
  }

  function getCurrentSlotsFromDOM() {
    const rows = document.querySelectorAll('#daySlots .slot-row');
    return Array.from(rows).map(row => ({
      time: row.querySelector('.slot-time').value.trim(),
      subject: row.querySelector('.slot-subject').value.trim()
    })).filter(s => s.subject);
  }

  function saveCurrentDaySlots() {
    if (!state.editingRoutineId) return;
    const r = state.routines.find(x => x.id === state.editingRoutineId);
    if (!r) return;
    const key = DAY_KEYS[state.currentDay];
    r.days[key] = getCurrentSlotsFromDOM();
  }

  // ---------- Log Page ----------
  function renderLogPage() {
    const dateInput = document.getElementById('logDate');
    if (!dateInput.value) dateInput.value = todayStr();

    // routine select
    const sel = document.getElementById('logRoutineSelect');
    sel.innerHTML = state.routines.map(r => 
      `<option value="${r.id}" ${r.isActive ? 'selected' : ''}>${r.name}</option>`
    ).join('') || `<option value="">${t('selectRoutine')}</option>`;

    renderLogEntries();
  }

  function renderLogEntries() {
    const date = document.getElementById('logDate').value || todayStr();
    const routineId = document.getElementById('logRoutineSelect').value;
    const r = state.routines.find(x => x.id === routineId) || getActiveRoutine();
    const container = document.getElementById('logEntries');

    if (!r) {
      container.innerHTML = `<p class="hint">${t('noSubjects')}</p>`;
      return;
    }

    const dayIdx = getDayIndex(date);
    const slots = r.days[DAY_KEYS[dayIdx]] || [];
    const subjects = [...new Set(slots.map(s => s.subject).filter(Boolean))];

    // existing log?
    const existing = state.logs.find(l => l.date === date);

    if (subjects.length === 0) {
      container.innerHTML = `<p class="hint">${t('noSubjects')}</p>`;
      return;
    }

    container.innerHTML = subjects.map(sub => {
      const val = existing && existing.entries[sub] ? existing.entries[sub] : '';
      return `
        <div class="log-entry">
          <label>${sub}</label>
          <textarea data-subject="${sub}" placeholder="...">${val}</textarea>
        </div>
      `;
    }).join('');
  }

  function buildLogTableHTML(log) {
    const rows = Object.entries(log.entries).map(([sub, done]) => 
      `<tr><td>${sub}</td><td>${done || '—'}</td></tr>`
    ).join('');
    return `
      <table class="log-table">
        <thead><tr><th>${t('subject')}</th><th>${state.settings.lang === 'bn' ? 'আজ যা করেছি' : 'What I did'}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function buildLogText(log) {
    const name = state.student.name || '';
    const cls = state.student.class || '';
    let text = `📚 ${name}${cls ? ' (' + cls + ')' : ''}\n📅 ${formatDate(log.date)}\n\n`;
    Object.entries(log.entries).forEach(([sub, done]) => {
      text += `▪ ${sub}: ${done || '—'}\n`;
    });
    return text;
  }

  // ---------- History ----------
  function calcStreaks() {
    if (state.logs.length === 0) return { current: 0, best: 0, total: 0 };
    const dates = [...new Set(state.logs.map(l => l.date))].sort();
    const total = dates.length;

    let best = 1, current = 1, temp = 1;
    for (let i = 1; i < dates.length; i++) {
      const prev = new Date(dates[i - 1] + 'T00:00:00');
      const curr = new Date(dates[i] + 'T00:00:00');
      const diff = (curr - prev) / 86400000;
      if (diff === 1) {
        temp++;
        best = Math.max(best, temp);
      } else {
        temp = 1;
      }
    }

    // current streak from today backwards
    const today = todayStr();
    let streak = 0;
    let check = new Date(today + 'T00:00:00');
    const dateSet = new Set(dates);
    // if today has log, start from today, else from yesterday
    if (!dateSet.has(today)) {
      check.setDate(check.getDate() - 1);
    }
    while (dateSet.has(check.toISOString().slice(0, 10))) {
      streak++;
      check.setDate(check.getDate() - 1);
    }
    current = streak;

    return { current, best: Math.max(best, current), total };
  }

  function getWeekDateRange() {
    const now = new Date();
    const day = now.getDay(); // 0 Sun
    const start = new Date(now);
    start.setDate(now.getDate() - day);
    start.setHours(0, 0, 0, 0);
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      dates.push(d.toISOString().slice(0, 10));
    }
    return dates;
  }

  function calcWeeklyProgress() {
    const weekDates = getWeekDateRange();
    const weekSet = new Set(weekDates);
    const weekLogs = state.logs.filter(l => weekSet.has(l.date));
    const daysLogged = new Set(weekLogs.map(l => l.date)).size;
    const subjectCount = {};
    weekLogs.forEach(log => {
      Object.keys(log.entries || {}).forEach(sub => {
        if (!sub) return;
        subjectCount[sub] = (subjectCount[sub] || 0) + 1;
      });
    });
    return { daysLogged, subjectCount, weekDates };
  }

  function renderExamCountdown() {
    const card = document.getElementById('examCountdownCard');
    const banner = document.getElementById('examBannerRoutine');
    const name = state.settings.examName || '';
    const date = state.settings.examDate || '';
    if (!date) {
      if (card) card.style.display = 'none';
      if (banner) banner.style.display = 'none';
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exam = new Date(date + 'T00:00:00');
    const diff = Math.ceil((exam - today) / 86400000);
    let text;
    if (diff > 0) text = diff + ' ' + t('daysLeft');
    else if (diff === 0) text = t('examToday');
    else text = t('examPassed');

    if (card) {
      card.style.display = 'block';
      document.getElementById('examDaysLeft').textContent = diff > 0 ? diff : (diff === 0 ? '0' : '—');
      document.getElementById('examNameDisplay').textContent = name ? (name + (diff > 0 ? ' · ' + text : ' · ' + text)) : text;
    }
    if (banner) {
      banner.style.display = 'flex';
      document.getElementById('examBannerText').textContent =
        (name ? name + ' — ' : '') + (diff > 0 ? diff + ' ' + t('daysLeft') : text);
    }
  }

  function renderHistoryPage() {
    const { current, best, total } = calcStreaks();
    document.getElementById('statDays').textContent = total;
    document.getElementById('statStreak').textContent = current;
    document.getElementById('statBest').textContent = best;

    // Weekly progress
    const { daysLogged, subjectCount } = calcWeeklyProgress();
    const pct = Math.round((daysLogged / 7) * 100);
    const fill = document.getElementById('weekProgressFill');
    const txt = document.getElementById('weekProgressText');
    if (fill) fill.style.width = pct + '%';
    if (txt) txt.textContent = daysLogged + ' / 7';

    const subEl = document.getElementById('subjectStats');
    if (subEl) {
      const entries = Object.entries(subjectCount).sort((a, b) => b[1] - a[1]);
      if (entries.length === 0) {
        subEl.innerHTML = `<p class="hint">${t('noSubjectStats')}</p>`;
      } else {
        subEl.innerHTML = entries.map(([sub, count]) =>
          `<span class="subject-chip"><span class="count">${count}</span>${sub}</span>`
        ).join('');
      }
    }

    renderExamCountdown();

    const list = document.getElementById('historyList');
    if (state.logs.length === 0) {
      list.innerHTML = `<p class="hint">${t('noLogs')}</p>`;
      return;
    }
    const sorted = [...state.logs].sort((a, b) => b.date.localeCompare(a.date));
    list.innerHTML = sorted.map(log => `
      <div class="history-item" data-date="${log.date}">
        <div>
          <div class="date">${formatDate(log.date)}</div>
          <div class="count">${Object.keys(log.entries).length} ${state.settings.lang === 'bn' ? 'টি বিষয়' : 'subjects'}</div>
        </div>
        <span>›</span>
      </div>
    `).join('');
  }

  function applyTemplate(tpl) {
    const name = state.settings.lang === 'bn' ? tpl.nameBn : tpl.nameEn;
    const r = {
      id: uid(),
      name: name,
      isActive: state.routines.length === 0,
      days: JSON.parse(JSON.stringify(tpl.days))
    };
    if (r.isActive) state.routines.forEach(x => x.isActive = false);
    r.isActive = true;
    state.routines.push(r);
    state.editingRoutineId = r.id;
    state.currentDay = new Date().getDay();
    saveData();
    document.getElementById('templateModal').classList.remove('open');
    renderRoutinePage();
    toast(t('saved'));
  }

  function openTemplateModal() {
    const list = document.getElementById('templateList');
    const lang = state.settings.lang;
    list.innerHTML = TEMPLATES.map(tpl => `
      <div class="template-item" data-id="${tpl.id}">
        <div>
          <div class="tpl-name">${lang === 'bn' ? tpl.nameBn : tpl.nameEn}</div>
          <div class="tpl-desc">${lang === 'bn' ? tpl.descBn : tpl.descEn}</div>
        </div>
        <button class="btn btn-sm btn-primary">${t('useTemplate')}</button>
      </div>
    `).join('');
    document.getElementById('templateModal').classList.add('open');
  }

  function loadExamSettingsUI() {
    const nameIn = document.getElementById('examNameInput');
    const dateIn = document.getElementById('examDateInput');
    if (nameIn) nameIn.value = state.settings.examName || '';
    if (dateIn) dateIn.value = state.settings.examDate || '';
  }


  // ---------- Image Generation ----------
  function getThemeColors() {
    const themes = {
      blue: {
        primary: '#4f46e5', light: '#dbeafe', soft: '#eff6ff', dark: '#312e81',
        grad: 'linear-gradient(145deg, #e0e7ff 0%, #eef2ff 35%, #ffffff 70%, #f0f9ff 100%)',
        cardGrad: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        accent: 'linear-gradient(135deg, #4f46e5, #4338ca)'
      },
      green: {
        primary: '#10b981', light: '#d1fae5', soft: '#ecfdf5', dark: '#064e3b',
        grad: 'linear-gradient(145deg, #d1fae5 0%, #ecfdf5 35%, #ffffff 70%, #f0fdf4 100%)',
        cardGrad: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
        accent: 'linear-gradient(135deg, #10b981, #059669)'
      },
      purple: {
        primary: '#8b5cf6', light: '#ede9fe', soft: '#f5f3ff', dark: '#4c1d95',
        grad: 'linear-gradient(145deg, #ede9fe 0%, #f5f3ff 35%, #ffffff 70%, #faf5ff 100%)',
        cardGrad: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)',
        accent: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
      }
    };
    return themes[state.settings.theme] || themes.blue;
  }

  function buildRoutineHTML(mode) {
    const r = getActiveRoutine();
    if (!r) return null;
    const colors = getThemeColors();
    const name = state.student.name || (state.settings.lang === 'bn' ? 'শিক্ষার্থী' : 'Student');
    const cls = state.student.class || '';
    const dateStr = new Date().toLocaleDateString(state.settings.lang === 'bn' ? 'bn-BD' : 'en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    const isLandscape = mode === 'landscape';
    const title = state.settings.lang === 'bn' ? 'সাপ্তাহিক ক্লাস রুটিন' : 'Weekly Class Routine';
    const daysShort = t('days');
    const daysFull = t('daysFull');
    const timeLabel = t('timeCol');

    // Collect unique times (preserve order of first appearance, then sort-ish)
    const timeSet = [];
    const timeIndex = {};
    DAY_KEYS.forEach((key) => {
      (r.days[key] || []).forEach((s) => {
        const tm = (s.time || '').trim();
        if (tm && timeIndex[tm] === undefined) {
          timeIndex[tm] = timeSet.length;
          timeSet.push(tm);
        }
      });
    });
    // Also collect untimed subjects per day
    const untimed = {};
    DAY_KEYS.forEach((key) => {
      untimed[key] = (r.days[key] || []).filter(s => !(s.time || '').trim() && (s.subject || '').trim());
    });

    // Build cell map: time -> dayKey -> subjects[]
    const cellMap = {};
    timeSet.forEach((tm) => { cellMap[tm] = {}; DAY_KEYS.forEach(k => { cellMap[tm][k] = []; }); });
    DAY_KEYS.forEach((key) => {
      (r.days[key] || []).forEach((s) => {
        const tm = (s.time || '').trim();
        const sub = (s.subject || '').trim();
        if (tm && sub && cellMap[tm]) cellMap[tm][key].push(sub);
      });
    });

    const hasTimes = timeSet.length > 0;

    // --- Landscape: classic institutional table ---
    if (isLandscape) {
      let tableRows = '';
      if (hasTimes) {
        timeSet.forEach((tm, rowIdx) => {
          const bg = rowIdx % 2 === 0 ? '#ffffff' : colors.soft;
          const cells = DAY_KEYS.map((key) => {
            const subs = cellMap[tm][key] || [];
            const text = subs.join('<br/>') || '—';
            return `<td style="
              border: 1px solid #cbd5e1;
              padding: 10px 8px;
              text-align: center;
              vertical-align: middle;
              font-size: 13px;
              font-weight: ${subs.length ? '600' : '400'};
              color: ${subs.length ? '#0f172a' : '#94a3b8'};
              background: ${bg};
              min-width: 110px;
            ">${text}</td>`;
          }).join('');
          tableRows += `<tr>
            <td style="
              border: 1px solid #cbd5e1;
              padding: 10px 12px;
              text-align: center;
              font-weight: 700;
              font-size: 12.5px;
              color: ${colors.primary};
              background: ${colors.light};
              white-space: nowrap;
              min-width: 100px;
            ">${tm}</td>
            ${cells}
          </tr>`;
        });
      } else {
        // No times: one row per day content stacked — fallback to max slots rows
        let maxSlots = 0;
        DAY_KEYS.forEach(k => { maxSlots = Math.max(maxSlots, (r.days[k] || []).length); });
        if (maxSlots === 0) maxSlots = 1;
        for (let i = 0; i < maxSlots; i++) {
          const bg = i % 2 === 0 ? '#ffffff' : colors.soft;
          const cells = DAY_KEYS.map((key) => {
            const slot = (r.days[key] || [])[i];
            const text = slot ? (slot.subject || '—') : '—';
            return `<td style="border:1px solid #cbd5e1;padding:12px 8px;text-align:center;vertical-align:middle;font-size:13px;font-weight:600;color:#0f172a;background:${bg};">${text}</td>`;
          }).join('');
          tableRows += `<tr>
            <td style="border:1px solid #cbd5e1;padding:10px;text-align:center;font-weight:700;font-size:12px;color:${colors.primary};background:${colors.light};">${t('period')} ${i + 1}</td>
            ${cells}
          </tr>`;
        }
      }

      // Untimed note rows
      let untimedNote = '';
      const hasUntimed = DAY_KEYS.some(k => (untimed[k] || []).length);
      if (hasUntimed && hasTimes) {
        const cells = DAY_KEYS.map((key) => {
          const items = (untimed[key] || []).map(s => s.subject).join('<br/>') || '—';
          return `<td style="border:1px solid #cbd5e1;padding:8px;text-align:center;font-size:12px;background:#f8fafc;color:#475569;">${items}</td>`;
        }).join('');
        untimedNote = `<tr>
          <td style="border:1px solid #cbd5e1;padding:8px;text-align:center;font-size:11px;font-weight:700;color:#64748b;background:#f1f5f9;">+</td>
          ${cells}
        </tr>`;
      }

      const dayHeaders = DAY_KEYS.map((key, i) =>
        `<th style="
          border: 1px solid rgba(255,255,255,0.2);
          padding: 14px 8px;
          text-align: center;
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          background: transparent;
          letter-spacing: 0.02em;
        ">${daysShort[i]}</th>`
      ).join('');

      return `
        <div class="render-card" id="renderTarget" style="
          width: 1600px; height: 1000px;
          padding: 0;
          background: #f8fafc;
          display: flex; flex-direction: column;
          font-family: 'Noto Sans Bengali', 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        ">
          <div style="height: 6px; background: ${colors.accent};"></div>
          <div style="padding: 28px 40px 20px; background: linear-gradient(180deg, ${colors.light} 0%, #f8fafc 100%);">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:18px;">
                <div style="
                  width: 56px; height: 56px; border-radius: 14px;
                  background: ${colors.accent};
                  display:flex;align-items:center;justify-content:center;
                  color:#fff;font-size:26px;font-weight:800;
                  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
                ">📚</div>
                <div>
                  <div style="font-size:26px;font-weight:800;color:${colors.dark};letter-spacing:-0.02em;line-height:1.2;">${name}</div>
                  <div style="font-size:14px;color:#64748b;margin-top:3px;font-weight:500;">
                    ${cls ? cls + '  ·  ' : ''}<span style="color:${colors.primary};font-weight:700;">${r.name}</span>
                  </div>
                </div>
              </div>
              <div style="text-align:right;">
                <div style="
                  display:inline-block;
                  background: ${colors.accent};
                  color: #fff;
                  font-size: 14px;
                  font-weight: 800;
                  padding: 8px 20px;
                  border-radius: 8px;
                  letter-spacing: 0.04em;
                  text-transform: uppercase;
                ">${title}</div>
                <div style="font-size:12px;color:#94a3b8;margin-top:8px;font-weight:500;">${dateStr}</div>
              </div>
            </div>
          </div>

          <div style="padding: 8px 36px 24px; flex: 1;">
            <table style="
              width: 100%;
              border-collapse: collapse;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 24px rgba(15,23,42,0.08);
              border: 2px solid ${colors.primary};
            ">
              <thead>
                <tr style="background: ${colors.accent};">
                  <th style="
                    border: 1px solid rgba(255,255,255,0.2);
                    padding: 14px 12px;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 800;
                    color: #fff;
                    min-width: 100px;
                  ">${timeLabel}</th>
                  ${dayHeaders}
                </tr>
              </thead>
              <tbody>
                ${tableRows}
                ${untimedNote}
              </tbody>
            </table>
          </div>

          <div style="
            margin-top: auto;
            padding: 12px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #e2e8f0;
            background: #fff;
          ">
            <div style="font-size:12px;color:#94a3b8;font-weight:600;">StudyLedger · পড়ালেখার দিনলিপি</div>
            <div style="font-size:11px;color:#cbd5e1;">studyledger-ten.vercel.app</div>
          </div>
        </div>
      `;
    }

    // --- Portrait: lock-screen friendly stacked day cards in elegant table style ---
    let dayBlocks = '';
    DAY_KEYS.forEach((key, i) => {
      const slots = r.days[key] || [];
      if (!slots.length) return;
      const rows = slots.map((s, idx) => `
        <div style="
          display:flex;
          gap:12px;
          align-items:flex-start;
          padding: 11px 14px;
          background: ${idx % 2 === 0 ? '#fff' : colors.soft};
          border-bottom: 1px solid #e2e8f0;
        ">
          ${s.time ? `<div style="
            min-width: 88px;
            font-weight: 800;
            font-size: 13px;
            color: ${colors.primary};
            padding-top: 1px;
          ">${s.time}</div>` : ''}
          <div style="font-size: 15px; font-weight: 600; color: #0f172a; flex:1;">${s.subject || ''}</div>
        </div>
      `).join('');
      dayBlocks += `
        <div style="
          border-radius: 14px;
          overflow: hidden;
          border: 1.5px solid ${colors.primary}33;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          margin-bottom: 16px;
        ">
          <div style="
            background: ${colors.accent};
            color: #fff;
            font-weight: 800;
            font-size: 15px;
            padding: 12px 16px;
            letter-spacing: 0.02em;
          ">${daysFull[i]}</div>
          ${rows}
        </div>
      `;
    });

    return `
      <div class="render-card" id="renderTarget" style="
        width: 1080px; height: 2400px;
        padding: 0;
        background: linear-gradient(180deg, ${colors.light} 0%, #ffffff 25%, #f8fafc 100%);
        display: flex; flex-direction: column;
        font-family: 'Noto Sans Bengali', 'Inter', sans-serif;
        position: relative;
        overflow: hidden;
      ">
        <div style="height: 8px; background: ${colors.accent};"></div>
        <div style="padding: 140px 48px 40px; text-align: center;">
          <div style="
            display:inline-flex;align-items:center;justify-content:center;
            width:72px;height:72px;border-radius:18px;
            background:${colors.accent};color:#fff;font-size:34px;
            margin-bottom:18px;box-shadow:0 8px 24px rgba(0,0,0,0.12);
          ">📚</div>
          <div style="font-size:36px;font-weight:800;color:${colors.dark};letter-spacing:-0.02em;">${name}</div>
          <div style="font-size:17px;color:#64748b;margin-top:6px;font-weight:500;">
            ${cls ? cls + ' · ' : ''}${r.name}
          </div>
          <div style="
            display:inline-block;margin-top:16px;
            background:${colors.accent};color:#fff;
            font-size:14px;font-weight:800;
            padding:8px 22px;border-radius:8px;
            letter-spacing:0.04em;
          ">${title}</div>
        </div>
        <div style="padding: 0 44px 40px; flex: 1;">
          ${dayBlocks}
        </div>
        <div style="text-align:center;padding:20px;font-size:13px;color:#94a3b8;font-weight:500;">
          ${dateStr} · StudyLedger
        </div>
      </div>
    `;
  }


  function encodeSharePayload(obj) {
    try {
      const json = JSON.stringify(obj);
      const b64 = btoa(unescape(encodeURIComponent(json)));
      return 'SL:' + b64;
    } catch (e) {
      return null;
    }
  }

  function decodeSharePayload(code) {
    try {
      let raw = (code || '').trim();
      if (raw.startsWith('SL:')) raw = raw.slice(3);
      const json = decodeURIComponent(escape(atob(raw)));
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }

  function openShareRoutineModal() {
    const r = getActiveRoutine();
    if (!r) {
      toast(t('selectRoutine'));
      return;
    }
    const payload = {
      v: 1,
      type: 'routine',
      routine: {
        name: r.name,
        days: r.days
      },
      from: state.student.name || '',
      class: state.student.class || ''
    };
    const code = encodeSharePayload(payload);
    if (!code) {
      toast(t('importFail'));
      return;
    }
    const out = document.getElementById('shareCodeOutput');
    if (out) out.value = code;
    document.getElementById('shareRoutineModal').classList.add('open');
  }

  function importTutorCode() {
    const input = document.getElementById('importCodeInput');
    const code = (input && input.value) || '';
    const data = decodeSharePayload(code);
    if (!data || !data.routine || !data.routine.days) {
      toast(t('importFail'));
      return;
    }
    const r = {
      id: uid(),
      name: data.routine.name || (state.settings.lang === 'bn' ? 'টিউটরের রুটিন' : 'Tutor routine'),
      isActive: true,
      days: data.routine.days
    };
    // ensure all day keys
    DAY_KEYS.forEach(k => { if (!r.days[k]) r.days[k] = []; });
    state.routines.forEach(x => { x.isActive = false; });
    state.routines.push(r);
    state.editingRoutineId = r.id;
    state.currentDay = new Date().getDay();
    if (data.from && !state.student.name) state.student.name = data.from;
    if (data.class && !state.student.class) state.student.class = data.class;
    saveData();
    if (input) input.value = '';
    renderRoutinePage();
    toast(t('importSuccess'));
  }

  async function waitForFonts() {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
    // extra wait for safety
    await new Promise(r => setTimeout(r, 300));
  }

  async function showPreview(mode) {
    const html = buildRoutineHTML(mode);
    if (!html) {
      toast(t('selectRoutine'));
      return;
    }
    state.previewMode = mode;
    const container = document.getElementById('previewContainer');
    container.innerHTML = html;

    // scale down for preview
    const target = document.getElementById('renderTarget');
    const scale = mode === 'landscape' ? 0.42 : 0.28;
    target.style.transform = `scale(${scale})`;
    target.style.transformOrigin = 'top center';
    container.style.height = mode === 'landscape' ? '440px' : '700px';

    document.getElementById('previewTitle').textContent = 
      mode === 'landscape' ? 'Landscape Preview' : 'Portrait Preview';
    document.getElementById('previewModal').classList.add('open');
  }

  async function downloadImage(format) {
    await waitForFonts();
    const mode = state.previewMode;
    // rebuild at full size without scale
    const html = buildRoutineHTML(mode);
    const renderArea = document.getElementById('renderArea');
    renderArea.innerHTML = html;
    const target = renderArea.querySelector('#renderTarget');
    target.style.transform = 'none';

    try {
      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: target.offsetWidth,
        height: target.offsetHeight
      });

      if (format === 'png') {
        const link = document.createElement('a');
        link.download = `routine-${mode}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } else {
        const { jsPDF } = window.jspdf;
        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        const isL = mode === 'landscape';
        const pdf = new jsPDF({
          orientation: isL ? 'landscape' : 'portrait',
          unit: 'px',
          format: isL ? [1600, 1000] : [1080, 2400]
        });
        pdf.addImage(imgData, 'JPEG', 0, 0, isL ? 1600 : 1080, isL ? 1000 : 2400);
        pdf.save(`routine-${mode}-${Date.now()}.pdf`);
      }
      toast(t('saved'));
    } catch (e) {
      console.error(e);
      toast('Error generating image');
    } finally {
      renderArea.innerHTML = '';
    }
  }

  // Log image/pdf
  async function downloadLogAs(format) {
    const date = document.getElementById('logDate').value;
    const log = state.logs.find(l => l.date === date);
    if (!log) return;

    const colors = getThemeColors();
    const name = state.student.name || '';
    const reportTitle = state.settings.lang === 'bn' ? 'আজকের পড়াশোনার রিপোর্ট' : "Today's Study Report";
    const doneLabel = state.settings.lang === 'bn' ? 'আজ যা করেছি' : 'What I did';
    const html = `
      <div id="logRender" class="render-card" style="
        width: 800px; padding: 0; overflow: hidden;
        background: ${colors.grad};
        font-family: 'Noto Sans Bengali', 'Inter', sans-serif;
        border-radius: 4px;
      ">
        <div style="height: 7px; background: ${colors.accent};"></div>
        <div style="padding: 36px 40px 40px;">
          <div style="text-align:center;margin-bottom:28px;">
            <div style="font-size:24px;font-weight:800;color:${colors.dark};letter-spacing:-0.02em;">${name}</div>
            <div style="font-size:14px;color:#64748b;margin-top:4px;">${formatDate(log.date)}</div>
            <div style="
              display: inline-block;
              margin-top: 14px;
              background: ${colors.accent};
              color: #fff;
              font-size: 14px;
              font-weight: 700;
              padding: 8px 20px;
              border-radius: 999px;
            ">${reportTitle}</div>
          </div>
          <table style="width:100%;border-collapse:separate;border-spacing:0;font-size:14px;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
            <thead>
              <tr style="background: ${colors.accent};">
                <th style="padding:13px 16px;text-align:left;color:#fff;font-weight:700;">${t('subject')}</th>
                <th style="padding:13px 16px;text-align:left;color:#fff;font-weight:700;">${doneLabel}</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(log.entries).map(([s, d], i) => `
                <tr style="background: ${i % 2 === 0 ? '#ffffff' : colors.soft};">
                  <td style="padding:12px 16px;border-bottom:1px solid rgba(0,0,0,0.05);font-weight:650;color:#1e293b;">${s}</td>
                  <td style="padding:12px 16px;border-bottom:1px solid rgba(0,0,0,0.05);color:#334155;">${d || '—'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
    const renderArea = document.getElementById('renderArea');
    renderArea.innerHTML = html;
    await waitForFonts();

    try {
      const target = document.getElementById('logRender');
      const canvas = await html2canvas(target, { scale: 2, useCORS: true, backgroundColor: '#fff' });
      if (format === 'png') {
        const a = document.createElement('a');
        a.download = `log-${date}.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
      } else {
        const { jsPDF } = window.jspdf;
        const img = canvas.toDataURL('image/jpeg', 0.92);
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [800, canvas.height / 2] });
        pdf.addImage(img, 'JPEG', 0, 0, 800, canvas.height / 2);
        pdf.save(`log-${date}.pdf`);
      }
      toast(t('saved'));
    } catch (e) {
      console.error(e);
      toast('Error');
    } finally {
      renderArea.innerHTML = '';
    }
  }

  // ---------- Event Bindings ----------
  function bindEvents() {
    // Nav (mobile bottom + desktop top)
    document.querySelectorAll('.nav-item, .desktop-nav .nav-link').forEach(btn => {
      btn.addEventListener('click', () => showPage(btn.dataset.page));
    });

    // Lang
    document.getElementById('langToggle').addEventListener('click', () => {
      state.settings.lang = state.settings.lang === 'bn' ? 'en' : 'bn';
      saveData();
      applyI18n();
      renderRoutinePage();
      renderLogPage();
      renderHistoryPage();
    });

    // Theme toggle (dark)
    document.getElementById('themeToggle').addEventListener('click', () => {
      state.settings.darkMode = !state.settings.darkMode;
      saveData();
      applyTheme();
    });
    document.getElementById('darkModeCheck').addEventListener('change', (e) => {
      state.settings.darkMode = e.target.checked;
      saveData();
      applyTheme();
    });

    // Color theme
    document.getElementById('themeOptions').addEventListener('click', (e) => {
      const sw = e.target.closest('.theme-swatch');
      if (!sw) return;
      state.settings.theme = sw.dataset.theme;
      saveData();
      applyTheme();
    });

    // Student info
    document.getElementById('studentName').addEventListener('change', (e) => {
      state.student.name = e.target.value.trim();
      saveData();
    });
    document.getElementById('studentClass').addEventListener('change', (e) => {
      state.student.class = e.target.value.trim();
      saveData();
    });

    // Add routine
    document.getElementById('addRoutineBtn').addEventListener('click', () => {
      const name = prompt(t('routineName'), t('defaultRoutine'));
      if (!name) return;
      const r = {
        id: uid(),
        name: name.trim(),
        isActive: state.routines.length === 0,
        days: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] }
      };
      state.routines.push(r);
      state.editingRoutineId = r.id;
      state.currentDay = new Date().getDay();
      saveData();
      renderRoutinePage();
    });

    // Templates
    const tplBtn = document.getElementById('templateBtn');
    if (tplBtn) tplBtn.addEventListener('click', openTemplateModal);
    const tplList = document.getElementById('templateList');
    if (tplList) {
      tplList.addEventListener('click', (e) => {
        const item = e.target.closest('.template-item');
        if (!item) return;
        const tpl = TEMPLATES.find(x => x.id === item.dataset.id);
        if (tpl) applyTemplate(tpl);
      });
    }

    // Exam settings
    const saveExamBtn = document.getElementById('saveExamBtn');
    if (saveExamBtn) {
      saveExamBtn.addEventListener('click', () => {
        state.settings.examName = (document.getElementById('examNameInput')?.value || '').trim();
        state.settings.examDate = document.getElementById('examDateInput')?.value || '';
        saveData();
        renderExamCountdown();
        toast(t('saved'));
      });
    }
    const clearExamBtn = document.getElementById('clearExamBtn');
    if (clearExamBtn) {
      clearExamBtn.addEventListener('click', () => {
        state.settings.examName = '';
        state.settings.examDate = '';
        const ni = document.getElementById('examNameInput');
        const di = document.getElementById('examDateInput');
        if (ni) ni.value = '';
        if (di) di.value = '';
        saveData();
        renderExamCountdown();
        toast(t('deleted'));
      });
    }


    // Share routine with students
    const shareRoutineBtn = document.getElementById('shareRoutineBtn');
    if (shareRoutineBtn) shareRoutineBtn.addEventListener('click', openShareRoutineModal);
    const copyShareCodeBtn = document.getElementById('copyShareCodeBtn');
    if (copyShareCodeBtn) {
      copyShareCodeBtn.addEventListener('click', async () => {
        const out = document.getElementById('shareCodeOutput');
        if (!out || !out.value) return;
        try {
          await navigator.clipboard.writeText(out.value);
          toast(t('copied'));
        } catch {
          out.select();
          document.execCommand('copy');
          toast(t('copied'));
        }
      });
    }
    const waShareCodeBtn = document.getElementById('waShareCodeBtn');
    if (waShareCodeBtn) {
      waShareCodeBtn.addEventListener('click', () => {
        const out = document.getElementById('shareCodeOutput');
        if (!out || !out.value) return;
        const msg = encodeURIComponent(
          (state.settings.lang === 'bn'
            ? '📚 StudyLedger রুটিন কোড\\nনিচের কোডটি কপি করে StudyLedger অ্যাপে «টিউটরের রুটিন ইমপোর্ট» এ পেস্ট করো:\\n\\n'
            : '📚 StudyLedger routine code\\nPaste this under Import tutor routine:\\n\\n') + out.value +
          '\\n\\nhttps://studyledger-ten.vercel.app/'
        );
        window.open('https://wa.me/?text=' + msg, '_blank');
      });
    }
    const importCodeBtn = document.getElementById('importCodeBtn');
    if (importCodeBtn) importCodeBtn.addEventListener('click', importTutorCode);

    // Routine list actions
    document.getElementById('routineList').addEventListener('click', (e) => {
      const item = e.target.closest('.routine-item');
      if (!item) return;
      const id = item.dataset.id;
      const action = e.target.closest('[data-action]')?.dataset.action || 
                     (e.target.classList.contains('name') ? 'edit' : null);
      if (action === 'edit') {
        saveCurrentDaySlots();
        state.editingRoutineId = id;
        state.currentDay = new Date().getDay();
        renderRoutinePage();
      } else if (action === 'activate') {
        state.routines.forEach(r => r.isActive = r.id === id);
        saveData();
        renderRoutinePage();
        toast(t('saved'));
      } else if (action === 'delete') {
        if (!confirm('Delete routine?')) return;
        state.routines = state.routines.filter(r => r.id !== id);
        if (state.editingRoutineId === id) state.editingRoutineId = null;
        if (state.routines.length && !state.routines.some(r => r.isActive)) {
          state.routines[0].isActive = true;
        }
        saveData();
        renderRoutinePage();
      }
    });

    // Days tabs
    document.getElementById('daysTabs').addEventListener('click', (e) => {
      const tab = e.target.closest('.day-tab');
      if (!tab) return;
      saveCurrentDaySlots();
      state.currentDay = +tab.dataset.day;
      renderDaysTabs();
      renderDaySlots();
    });

    // Day slots
    document.getElementById('daySlots').addEventListener('click', (e) => {
      if (e.target.classList.contains('add-slot-btn')) {
        saveCurrentDaySlots();
        const r = state.routines.find(x => x.id === state.editingRoutineId);
        const key = DAY_KEYS[state.currentDay];
        if (!r.days[key]) r.days[key] = [];
        r.days[key].push({ time: '', subject: '' });
        renderDaySlots();
      }
      if (e.target.classList.contains('remove-slot')) {
        const idx = +e.target.dataset.idx;
        const r = state.routines.find(x => x.id === state.editingRoutineId);
        const key = DAY_KEYS[state.currentDay];
        r.days[key].splice(idx, 1);
        renderDaySlots();
      }
    });

    // Save routine
    document.getElementById('saveRoutineBtn').addEventListener('click', () => {
      saveCurrentDaySlots();
      // also save name if changed? for simplicity keep as is
      state.student.name = document.getElementById('studentName').value.trim();
      state.student.class = document.getElementById('studentClass').value.trim();
      saveData();
      toast(t('saved'));
      renderRoutinePage();
    });

    // Copy day
    document.getElementById('copyDayBtn').addEventListener('click', () => {
      saveCurrentDaySlots();
      const days = t('days');
      const fromSel = document.getElementById('copyFromDay');
      fromSel.innerHTML = days.map((d, i) => `<option value="${i}">${d}</option>`).join('');
      fromSel.value = state.currentDay;
      const toBox = document.getElementById('copyToDays');
      toBox.innerHTML = days.map((d, i) => `
        <label><input type="checkbox" value="${i}" ${i === state.currentDay ? '' : ''}/> ${d}</label>
      `).join('');
      document.getElementById('copyDayModal').classList.add('open');
    });

    document.getElementById('confirmCopyBtn').addEventListener('click', () => {
      const from = +document.getElementById('copyFromDay').value;
      const r = state.routines.find(x => x.id === state.editingRoutineId);
      if (!r) return;
      const source = JSON.parse(JSON.stringify(r.days[DAY_KEYS[from]] || []));
      document.querySelectorAll('#copyToDays input:checked').forEach(cb => {
        r.days[DAY_KEYS[+cb.value]] = JSON.parse(JSON.stringify(source));
      });
      saveData();
      renderDaySlots();
      document.getElementById('copyDayModal').classList.remove('open');
      toast(t('saved'));
    });

    // Preview
    document.getElementById('previewLandscapeBtn').addEventListener('click', () => {
      saveCurrentDaySlots();
      saveData();
      showPreview('landscape');
    });
    document.getElementById('previewPortraitBtn').addEventListener('click', () => {
      saveCurrentDaySlots();
      saveData();
      showPreview('portrait');
    });
    document.getElementById('closePreview').addEventListener('click', () => {
      document.getElementById('previewModal').classList.remove('open');
    });
    document.getElementById('downloadPngBtn').addEventListener('click', () => downloadImage('png'));
    document.getElementById('downloadPdfBtn').addEventListener('click', () => downloadImage('pdf'));

    // Log page
    document.getElementById('logDate').addEventListener('change', renderLogEntries);
    document.getElementById('logRoutineSelect').addEventListener('change', renderLogEntries);

    document.getElementById('submitLogBtn').addEventListener('click', () => {
      const date = document.getElementById('logDate').value;
      const routineId = document.getElementById('logRoutineSelect').value;
      const entries = {};
      document.querySelectorAll('#logEntries textarea').forEach(ta => {
        entries[ta.dataset.subject] = ta.value.trim();
      });
      if (Object.keys(entries).length === 0) {
        toast(t('noSubjects'));
        return;
      }
      const existingIdx = state.logs.findIndex(l => l.date === date);
      const log = { date, routineId, entries };
      if (existingIdx >= 0) state.logs[existingIdx] = log;
      else state.logs.push(log);
      saveData();

      // show result
      const result = document.getElementById('logResult');
      result.style.display = 'block';
      document.getElementById('logTableContainer').innerHTML = buildLogTableHTML(log);
      toast(t('saved'));
    });

    document.getElementById('shareWhatsAppBtn').addEventListener('click', () => {
      const date = document.getElementById('logDate').value;
      const log = state.logs.find(l => l.date === date);
      if (!log) return;
      const text = encodeURIComponent(buildLogText(log));
      window.open(`https://wa.me/?text=${text}`, '_blank');
    });

    document.getElementById('copyTableBtn').addEventListener('click', async () => {
      const date = document.getElementById('logDate').value;
      const log = state.logs.find(l => l.date === date);
      if (!log) return;
      try {
        await navigator.clipboard.writeText(buildLogText(log));
        toast(t('copied'));
      } catch {
        toast('Copy failed');
      }
    });

    document.getElementById('downloadLogImgBtn').addEventListener('click', () => downloadLogAs('png'));
    document.getElementById('downloadLogPdfBtn').addEventListener('click', () => downloadLogAs('pdf'));

    // History click
    document.getElementById('historyList').addEventListener('click', (e) => {
      const item = e.target.closest('.history-item');
      if (!item) return;
      const date = item.dataset.date;
      const log = state.logs.find(l => l.date === date);
      if (!log) return;

      const body = document.getElementById('editLogBody');
      body.innerHTML = `
        <p style="margin-bottom:12px;font-weight:600;">${formatDate(date)}</p>
        ${Object.entries(log.entries).map(([s, d]) => `
          <div class="form-group">
            <label>${s}</label>
            <textarea data-subject="${s}">${d}</textarea>
          </div>
        `).join('')}
      `;
      document.getElementById('editLogModal').classList.add('open');
      document.getElementById('editLogModal').dataset.date = date;
    });

    document.getElementById('saveEditLogBtn').addEventListener('click', () => {
      const date = document.getElementById('editLogModal').dataset.date;
      const log = state.logs.find(l => l.date === date);
      if (!log) return;
      document.querySelectorAll('#editLogBody textarea').forEach(ta => {
        log.entries[ta.dataset.subject] = ta.value.trim();
      });
      saveData();
      document.getElementById('editLogModal').classList.remove('open');
      renderHistoryPage();
      toast(t('saved'));
    });

    document.getElementById('deleteLogBtn').addEventListener('click', () => {
      if (!confirm(t('confirmDeleteLog'))) return;
      const date = document.getElementById('editLogModal').dataset.date;
      state.logs = state.logs.filter(l => l.date !== date);
      saveData();
      document.getElementById('editLogModal').classList.remove('open');
      renderHistoryPage();
      toast(t('deleted'));
    });

    // Settings: export / import / clear
    document.getElementById('exportBtn').addEventListener('click', () => {
      const data = {
        student: state.student,
        routines: state.routines,
        logs: state.logs,
        settings: state.settings
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `student-routine-backup-${todayStr()}.json`;
      a.click();
    });

    document.getElementById('importBtn').addEventListener('click', () => {
      document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          if (data.routines) state.routines = data.routines;
          if (data.logs) state.logs = data.logs;
          if (data.student) state.student = data.student;
          if (data.settings) state.settings = { ...state.settings, ...data.settings };
          saveData();
          applyI18n();
          applyTheme();
          renderRoutinePage();
          toast(t('saved'));
        } catch {
          toast('Invalid JSON');
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    });

    document.getElementById('clearDataBtn').addEventListener('click', () => {
      if (!confirm(t('confirmClear'))) return;
      localStorage.removeItem('studentRoutineData');
      state.student = { name: '', class: '' };
      state.routines = [];
      state.logs = [];
      state.editingRoutineId = null;
      renderRoutinePage();
      renderLogPage();
      renderHistoryPage();
      toast(t('deleted'));
    });

    // Modal close
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.close).classList.remove('open');
      });
    });
    document.querySelectorAll('.modal').forEach(m => {
      m.addEventListener('click', (e) => {
        if (e.target === m) m.classList.remove('open');
      });
    });
  }

  // ---------- PWA ----------
  let deferredInstallPrompt = null;

  function setupPWA() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      const card = document.getElementById('installCard');
      if (card) card.style.display = 'block';
    });
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        const card = document.getElementById('installCard');
        if (card) card.style.display = 'none';
      });
    }
  }

  // ---------- Init ----------
  function init() {
    loadData();
    applyI18n();
    applyTheme();
    bindEvents();
    setupPWA();
    renderRoutinePage();
    renderExamCountdown();
    loadExamSettingsUI();

    // auto open first routine if exists
    if (state.routines.length && !state.editingRoutineId) {
      state.editingRoutineId = (getActiveRoutine() || state.routines[0]).id;
      state.currentDay = new Date().getDay();
      renderRoutinePage();
    }
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

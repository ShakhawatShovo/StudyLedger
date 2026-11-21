# StudyLedger — Student Routine Tracker

একজন শিক্ষার্থীর সাপ্তাহিক রুটিন তৈরি ও দৈনিক অধ্যয়ন লগ রাখার সম্পূর্ণ স্ট্যাটিক ওয়েব অ্যাপ।

## ফিচার

- সাপ্তাহিক রুটিন তৈরি (৭ দিন, একাধিক স্লট)
- একাধিক রুটিন সেভ ও সক্রিয় রুটিন বেছে নেওয়া
- Landscape (প্রিন্ট) ও Portrait (লক স্ক্রিন) ইমেজ জেনারেশন
- PNG + PDF ডাউনলোড
- দৈনিক লগ (অটো সাজেস্ট)
- WhatsApp শেয়ার, টেবিল কপি, ইমেজ/PDF
- হিস্ট্রি + স্ট্রিক ট্র্যাকিং
- Local Storage, Export/Import JSON
- বাংলা / English টগল
- Dark Mode + ৩টি কালার থিম
- সম্পূর্ণ Responsive

## টেকনোলজি

- HTML, CSS, Vanilla JavaScript
- html2canvas + jsPDF (CDN)
- Google Fonts (Noto Sans Bengali)

## লোকালে চালানো

শুধু `index.html` ফাইলটি ব্রাউজারে খুলুন। অথবা:

```bash
npx serve .
```

## Vercel-এ ফ্রি ডিপ্লয়

1. GitHub-এ নতুন রিপোজিটরি তৈরি করুন।
2. এই ফোল্ডারের সব ফাইল (`index.html`, `style.css`, `script.js`, `README.md`) আপলোড করুন।
3. [vercel.com](https://vercel.com) এ গিয়ে GitHub দিয়ে সাইন ইন করুন।
4. **Add New Project** → আপনার রিপোজিটরি সিলেক্ট করুন।
5. Framework Preset: **Other** (বা Leave as is)।
6. **Deploy** চাপুন।

কয়েক সেকেন্ডের মধ্যে আপনার সাইট লাইভ হয়ে যাবে  
(উদাহরণ: `https://student-routine.vercel.app`)

### কাস্টম ডোমেইন (ঐচ্ছিক)
Vercel ড্যাশবোর্ড → Project → Settings → Domains থেকে ফ্রি সাবডোমেইন বা নিজের ডোমেইন যোগ করতে পারবেন।

## নোট

- সব ডেটা ব্রাউজারের Local Storage-এ থাকে।
- ব্রাউজার ডেটা ক্লিয়ার করলে ডেটা মুছে যাবে → মাঝে মাঝে **Export** করে ব্যাকআপ রাখুন।
- কোনো ব্যাকএন্ড বা অ্যাকাউন্ট লাগে না।

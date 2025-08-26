import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [nextSessionDate, setNextSessionDate] = useState<Date | null>(null);

  useEffect(() => {
    // Calculate next session date (first Monday after schools close)
    // For demo purposes, let's set it to next Monday
    const getNextMonday = () => {
      const today = new Date();
      const daysUntilMonday = (8 - today.getDay()) % 7 || 7;
      const nextMonday = new Date(today);
      nextMonday.setDate(today.getDate() + daysUntilMonday);
      nextMonday.setHours(8, 0, 0, 0); // 8 AM start time
      return nextMonday;
    };

    setNextSessionDate(getNextMonday());
  }, []);

  useEffect(() => {
    if (!nextSessionDate) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextSessionDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [nextSessionDate]);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-8 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Calendar className="h-6 w-6" />
          <h3 className="text-2xl font-bold">Next Session Countdown</h3>
        </div>
        <p className="text-blue-100">
          Next holiday session starts: {nextSessionDate?.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-sm text-blue-100">Days</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm text-blue-100">Hours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm text-blue-100">Minutes</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm text-blue-100">Seconds</div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-2 text-blue-100">
          <Clock className="h-4 w-4" />
          <span className="text-sm">Sessions run Monday - Friday, 8:00 AM - 12:30 PM</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
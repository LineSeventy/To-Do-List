export const startCountdown = (userTime, timerDate) => {
        const dueDate = new Date(userTime); 
      
        const timer = setInterval(() => {
          const now = new Date();
          const timeDifference = dueDate - now;
      
          if (timeDifference <= 0) {
            clearInterval(timer);
            timerDate.textContent = "Due date has passed";
            return;
          }
      
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          timerDate.textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
      };
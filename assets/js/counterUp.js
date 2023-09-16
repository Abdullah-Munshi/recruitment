class Counter {
    constructor(element, options) {
        this.element = element;
        this.startCount = options.startCount || 0;
        this.endCount = options.endCount || 0;
        this.duration = options.duration || 1000;
        this.suffix = options.suffix || '';
        this.currentCount = this.startCount;
        this.counterInterval = null;
  
        this.observer = new IntersectionObserver(this.startCounterWhenVisible.bind(this), {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Adjust the threshold as needed
        });
  
        this.observer.observe(element);
    }
  
    startCounterWhenVisible(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const increment = (this.endCount - this.startCount) / (this.duration / 10);
  
                this.counterInterval = setInterval(() => {
                    this.element.textContent = this.currentCount.toFixed(0) + this.suffix;
  
                    if (this.currentCount >= this.endCount) {
                        this.element.textContent = this.endCount.toFixed(0) + this.suffix;
                        clearInterval(this.counterInterval);
                    }
  
                    this.currentCount += increment;
                }, 10);
  
                this.observer.unobserve(this.element);
            }
        });
    }
  }
  
  // Create instances of the Counter class with different options
  const counters = document.querySelectorAll('.counter');
  const counterOptions = [
    { startCount: 0, endCount: 100, duration: 2000, suffix: '%' },
    { startCount: 0, endCount: 70, duration: 2000, suffix: '%' },
    { startCount: 0, endCount: 80, duration: 2000, suffix: '%' },
  ];
  
  counters.forEach((counter, index) => {
    new Counter(counter, counterOptions[index]);
  });
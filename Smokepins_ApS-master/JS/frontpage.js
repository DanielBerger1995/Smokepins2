window.addEventListener('scroll', function () {
     const first = document.querySelector('#first');
     const sectionBonding_first = first.getBoundingClientRect();
     if (
          sectionBonding_first.top <= 1000 &&
          sectionBonding_first.right < (window.innerWidth || document.documentElement.clientWidth) &&
          sectionBonding_first.top >= -200
     ) {
          const line_1 = document.querySelector('#first svg path');
          let pathLength_1 = line_1.getTotalLength();
          line_1.style.strokeDasharray = pathLength_1 + ' ' + pathLength_1;
          line_1.style.strokeDashoffset = pathLength_1;
          window.addEventListener("scroll", function (e) {
               const container_1 = document.querySelector('#first');
               var scrollPercentage_1 = (document.documentElement.scrollTop + 120) / -(container_1.scrollHeight - document.documentElement.clientHeight) + 300;
               var drawLength_1 = pathLength_1 * scrollPercentage_1;
               line_1.style.strokeDashoffset = pathLength_1 + drawLength_1;

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});






window.addEventListener('scroll', function () {
     const secend = document.querySelector('#secend');
     const sectionBonding_secend = secend.getBoundingClientRect();
     if (
          sectionBonding_secend.top <= 1000 &&
          sectionBonding_secend.top >= -400
     ) {
          const line_2 = document.querySelector('#secend svg path');
          let pathLength_2 = line_2.getTotalLength();
          line_2.style.strokeDasharray = pathLength_2 + ' ' + pathLength_2;
          line_2.style.strokeDashoffset = pathLength_2;
          window.addEventListener("scroll", function (e) {
               const container_2 = document.querySelector('#secend');
               var scrollPercentage_2 = (document.documentElement.scrollTop + 120) / 2 / (container_2.scrollHeight - document.documentElement.clientHeight) + 300;
               var drawLength_2 = pathLength_2 * scrollPercentage_2;
               line_2.style.strokeDashoffset = pathLength_2 + drawLength_2;

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});



window.addEventListener('scroll', function () {
     const third = document.querySelector('#third');
     const sectionBonding_third = third.getBoundingClientRect();
     if (
          sectionBonding_third.top <= 1400 &&
          sectionBonding_third.top >= -300
     ) {
          const line_3 = document.querySelector('#third svg path');
          let pathLength_3 = line_3.getTotalLength();
          line_3.style.strokeDasharray = pathLength_3 + ' ' + pathLength_3;
          line_3.style.strokeDashoffset = pathLength_3;
          window.addEventListener("scroll", function (e) {
               const container_3 = document.querySelector('#third');
               var scrollPercentage_3 = (document.documentElement.scrollTop) / -(container_3.scrollHeight - document.documentElement.clientHeight);
               var drawLength_3 = pathLength_3 * scrollPercentage_3;
               line_3.style.strokeDashoffset = (pathLength_3 + drawLength_3) / 1.5;

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});

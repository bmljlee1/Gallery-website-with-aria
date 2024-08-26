# week02-project

I found this assignment much more challenging than the previous. This is due to the high level of understanding needed to complete it. With CSS I feel that many things are self-explanatory with many aspects being 'experimentation' and seeing how things work, the dev tools in the browser is really a life-saver for CSS and HTML.
Whereas with javascript, the user must have quite a clear understanding of what does what and how it works.
I spend hours and hours just trying to understand a simple concept.

The biggest turning point for me was when i discovered that the code below:

    imageElement.addEventListener("click", function () {
      console.log(`clicked on ${image.alt}`);
      createBigImage(image);
      currentIndex = index;
    });

Is the same as the code below:

    // function userInteraction() {
    //   console.log(`clicked on ${image.alt}`);
    //   createBigImage(image);
    // }

    // imageElement.addEventListener("click", userInteraction());

🎯 What requirements did you achieve?

I was able to use Aria on my gallery. I also was able to use tab and keyboard accessibility.

🎯 Were there any requirements or goals that you were unable to achieve?

I don't believe my media queries was achieved. I attempted but I never got it working properly..
I tried to do the smooth scrolling but could not achieve this. I also could not figure out how to use the keyboard to highlight the arrow keys for next and previous images as well as this being used with Aria...

🎯 If so, what was it that you found difficult about these tasks?

I found the media queries tough as well as the functions... But after many attempts i feel like i understand it better. I also feel that I do not fully understand 'srcset'.

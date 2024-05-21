---
title: "Adding Smoothing"
date: "2023-05-17"
---

We finally implemented all three movement behaviors. The boids now do Flock centering, Collision avoidance, and Velocity matching.

We also updated the Boid model! The boid models were created in Blender using simple geometrical shapes. They are cone-shaped to make it easier to see the direction they are traveling in, and have a set of “wings” for the observer to easily spot their rotation.

The GIF below show what it looked like with the three behaviours implemented.
![before smoothing](/images/before_smoothing.gif)

While you can definately see some flock-like behaviors, we didn't quite find it flock-like enough, and we were disturbed by the boids' "twitching" and abrupt change of direction.
To fix that, we decided to implement some Smoothing, and to fine tune the parameters to better control **how much** Flock centering, Collision avoidance, and Velocity matching the boid should be doing.

We did that by using Unity's built-in SmoothDamp function. Essentially, the SmoothDamp function computes a vector that represents an average between the boid's current direction and its new direction. This averaging effect smooths out directional changes, particularly noticeable when a boid encounters the boundaries of its allowed flying area.

Furthermore, the introduction of three adjustable sliders for Flock Centering, Velocity Matching, and Collision Avoidance enhances the simulation's flexibility. These sliders, adjustable from 0 to 100, modify the intensity of the pre-calculated behaviors, allowing precise calibration of the flock's dynamics to achieve more realistic simulations. Below is the final result.

![after smoothing](/images/after_smoothing.gif)

---
title: "Implementation update"
date: "2023-05-12"
---

Here's a quick update on where we are in the implementation process.
So far we have:

1. Rendered the "boids".

The cylinders might not be very bird-like at the moment, but we will change the look of the objects later.
The Boids are rendered at random positions at random angles within a sphere with a fixed radius.

![Rendering the boids](/images/rendering_boids.png)

2. Implemented the neighbor function.

One central function of the boids algorithm is being able to calculate hom many neighbors each biod has within it's neighbor radius. The number of neighboring boids and their positions are crucial for calculating the movement of the boids later on.
In the image below we wanted to varify that our method for calculating neighbors was working. We colored the boids from light green if a boid has many neighbors, to dark green if a boid has few neighbors. It's a bit hard to see in this 2D image, but when moving around the camera the color of the boids looked very resonable.

![Verifying neighbor function](/images/distance.png)

3. Implemented the first of the three movement behaviours - Flock centering.

In the GIF below you can see that the boids does indeed move closer to neighboring boids. However, since we haven't implemented Collision avoidance and Velocity matching yet, the boids simply gets stuck close to one another.

![flock centering](/images/cohesion.gif)

---
title: "Algorithm deep-dive"
date: "2023-05-11"
---

Today we've been doing a deep dive into the actual algorithm to better understand what we are implementing. Here's an overview. We have created the images ourselves, they will be used in the final report.

### The two radii

In Reynold’s Boids algorithm the behavior of a single bird is decided by three rules; Flock centering, Velocity matching, and Collision avoidance. The three rules of movement are calculated using two radii. The avoidance radius, which gives the circle/sphere within which the bird tries to avoid collision with flockmates. As well as the neighbour radius within which the birds tries to group together with their flockmates.

![The Two Radii](/images/radii.png)

### Flock centering

Flock centering is the bird’s will to stay close to nearby flockmates. It’s calculated by adding the position of every bird within the neighbor radius and dividing that number with the amount of neighbors.
![Flock Centering](/images/boids.png)

### Velocity matching

The bird tries to match velocity with nearby flockmates. It’s done by calculating the average velocity of all the birds within the neighbor radius. By maintaining the same speed as its neighbors, the bird minimizes the amount of collisions.
![Velocity Matching](/images/boids_alignment.png)

### Collision avoidance

Despite trying to match velocity with their flock mates the birds will sometimes collide. Therefore the behavior of Collision avoidance is needed. This behavior is calculated by averaging the difference in position between the bird and every bird within its avoidance radius.
![Collision Avoidance](/images/boids_Avoidance.png)

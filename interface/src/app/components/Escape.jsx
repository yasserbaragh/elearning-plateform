"use client"

import React, { useEffect, useRef, useState } from "react"
import playerSprite from "./player.png"
import keyImage from "./key.png"
import doorImage from "./door.png"
import backgroundImage from "./background.jpg"

const TILE_SIZE = 48
const SCALE = 3
const PLAYER_SIZE = 32
const FRAME_WIDTH = 16
const FRAME_HEIGHT = 16
const FRAME_COUNT = 4

export default function Escape({ game }) {
    const canvasRef = useRef(null)
    const [inventory, setInventory] = useState([])
    const playerRef = useRef({ x: 50, y: 50, speed: 2, direction: 0, frame: 0 })
    const keyRef = useRef({ x: 400, y: 350, collected: false })
    const doorRef = useRef({ x: 310, y: 50, unlocked: false })
    const spriteImg = useRef(new Image())
    const keyImg = useRef(new Image())
    const doorImg = useRef(new Image())
    const bgImg = useRef(new Image())

    useEffect(() => {
        spriteImg.current.src = playerSprite.src
        keyImg.current.src = keyImage.src
        doorImg.current.src = doorImage.src
        bgImg.current.src = backgroundImage.src

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false, KeyE: false }

        const handleKeyDown = (e) => {
            if (e.code in keys) keys[e.code] = true
        }

        const handleKeyUp = (e) => {
            if (e.code in keys) keys[e.code] = false
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)

        let frameTimer = 0
        const update = () => {
            const player = playerRef.current
            let moved = false

            if (keys.ArrowLeft) {
                player.x -= player.speed
                player.direction = 1
                moved = true
            }
            if (keys.ArrowRight) {
                player.x += player.speed
                player.direction = 2
                moved = true
            }
            if (keys.ArrowUp) {
                player.y -= player.speed
                player.direction = 3
                moved = true
            }
            if (keys.ArrowDown) {
                player.y += player.speed
                player.direction = 0
                moved = true
            }

            player.x = Math.max(0, Math.min(canvas.width - PLAYER_SIZE, player.x))
            player.y = Math.max(0, Math.min(canvas.height - PLAYER_SIZE, player.y))

            if (moved) {
                frameTimer++
                if (frameTimer % 10 === 0) {
                    player.frame = (player.frame + 1) % FRAME_COUNT
                }
            } else {
                player.frame = 0
            }

            const key = keyRef.current
            if (!key.collected && isNear(player, key)) {
                if (keys.KeyE) {
                    key.collected = true
                    setInventory((prev) => [...prev, "key"])
                }
            }

            const door = doorRef.current
            if (!door.unlocked && isNear(player, door) && inventory.includes("key") && keys.KeyE) {
                door.unlocked = true
                const answer = prompt("What is the numerical value of gravity (m/s*s)")
                if (answer && answer.toLowerCase() === "10") {
                    door.unlocked = true
                    alert("Correct! You unlocked the door and escaped! REWARD : 200 COINS 💰 🎉")
                } else {
                    alert("Wrong answer! Try again.")
                }
            }
        }

        const draw = () => {
            const player = playerRef.current
            const key = keyRef.current
            const door = doorRef.current

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(bgImg.current, 0, 0, canvas.width, canvas.height)

            if (!key.collected) {
                ctx.drawImage(keyImg.current, key.x, key.y, TILE_SIZE / 2, TILE_SIZE / 2)
            }

            ctx.drawImage(
                doorImg.current,
                door.x,
                door.y,
                TILE_SIZE,
                TILE_SIZE * 1.5
            )

            const sx = player.frame * FRAME_WIDTH
            const sy = player.direction * FRAME_HEIGHT
            ctx.drawImage(
                spriteImg.current,
                sx,
                sy,
                FRAME_WIDTH,
                FRAME_HEIGHT,
                player.x,
                player.y,
                FRAME_WIDTH * SCALE,
                FRAME_HEIGHT * SCALE
            )
        }

        const loop = () => {
            update()
            draw()
            requestAnimationFrame(loop)
        }

        loop()

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [inventory])

    const isNear = (a, b, distance = 40) => {
        return (
            Math.abs(a.x - b.x) < distance &&
            Math.abs(a.y - b.y) < distance
        )
    }

    return (
        <div>
            <p>Inventory: {inventory.join(", ") || "Empty"}</p>
            <canvas
                ref={canvasRef}
                width={700}
                height={470}
                style={{ border: "2px solid black" }}
            />
        </div>
    )
}

const router = require("express").Router();
const Stripe = require("stripe")
const auth = require("../middleware/auth");
const Order = require("../models/orderModel");

const stripe = new Stripe(
  `${process.env.STRIPE_SK}`,
  { apiVersion: '2022-11-15', typescript: true }
)

router.post("/", auth, async (req, res) => {
  try {
    const { order, token } = req.body
    const userId = req.user

    const charge = await stripe.charges.create({
      amount: Number(Math.round(order.totalPrice) * 100),
      currency: 'aud',
      source: token.id,
      description: `CheckOut Order`,
    })
    if (charge.status !== 'succeeded') {
      return res.status(200).json({ success: false })
    }

    let items = []
    order.orders.forEach((item) => {
      items.push({
        productId: item.productId,
        count: item.count
      })
    })

    const newOrder = new Order({
      userId: userId,
      orderItems: items,
      address: order.address,
      phone: order.phone,
      extra: order.extra
    })

    await newOrder.save()
    return res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
})

module.exports = router;

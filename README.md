I have an application running on the latest Next.js (v16), which works perfectly under normal conditions. However, after migrating to **Cache Components**, I started encountering multiple issues—even though I’ve followed all the required cache component rules.

One specific issue I’m reporting here is that **a form fails to re-render correctly when navigating between routes via `<Link>`**.

---

## 🔗 Reproduction Repository

https://github.com/abhishekmardiya/cache-components-issues

---

## 🔁 Reproduction Steps

1. Navigate to the form page from the homepage using a link.
2. Remove the value from the input field.
3. Click **“Go to Test 2”** (navigate to `/test-2`).
4. Remove the input value again.
5. Click **“Go to Test 1”** (navigate back to `/test-1`).

At this point, you’ll notice that the **default value is no longer restored in the form input** as you move back and forth between these two routes.

---

## ✅ Expected Behavior

The form should re-render and display the default input value every time the route changes.

---

## ❌ Actual Behavior

The input retains the previously cleared state, and the default value is not restored when navigating back.

---

## 📝 Additional Notes

- This behavior **does not occur when Cache Components are disabled**.
- The issue only appears after migrating to Cache Components.

Could someone please explain why this happens with Cache Components enabled? Understanding this behavior would help me identify the correct fix.
@icyJoseph 
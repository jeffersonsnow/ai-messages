import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(threshold = 0.12) {
  const el = ref(null)
  const inView = ref(false)
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView.value = true
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { el, inView }
}

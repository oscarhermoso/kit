<script>
  const bomb = { blue_wire: { cut: () => console.log('defused')} };

  // @ts-expect-error: intentionally cause error during rendering
  landmine.red_wire.cut()
</script>

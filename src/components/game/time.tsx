export function Timer({ timer }: { timer: number }) {
  return (
    <>
      <h2>Time: {(timer / 1000).toFixed(3)}</h2>
    </>
  );
}

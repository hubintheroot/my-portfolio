import ErrorView from "../components/error";

export default function Forbidden() {
  return (
    <>
      <ErrorView code="403" info="잘못된 접근입니다." />
    </>
  );
}

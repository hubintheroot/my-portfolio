import ErrorView from "../components/error";

export default function NotFoundPage() {
  return (
    <>
      <ErrorView code="404" info="페이지를 찾을 수 없습니다." />
    </>
  );
}

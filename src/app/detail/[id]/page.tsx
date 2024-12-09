interface Params {
  id: number;
}
interface DetailProps {
  params: Params;
}
export default function Detail(props: DetailProps) {
  return (
    <>
      <h1>detail</h1>
      parameters: {props.params.id}
    </>
  );
}

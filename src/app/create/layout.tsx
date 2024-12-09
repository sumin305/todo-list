interface LayoutProps {
  children: string;
}
export default function Layout(props: LayoutProps) {
  return <div>{props.children}</div>;
}

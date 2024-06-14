interface IframeProps {
  src: string;
  width: string;
  height: string;
  title: string;
}

const IframeComponent: React.FC<IframeProps> = ({ src, width, height, title }) => {
  return (
    <iframe
      title={title} // Set the title attribute
      style={{ border: '1px solid transparent' }}
      allowTransparency={true}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default IframeComponent;


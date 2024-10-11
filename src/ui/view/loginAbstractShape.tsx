import { cn } from "@/utils/functions";
interface IProps {}

const AbstractShape: React.FC<IProps> = () => {
  return (
    <video
      className={cn("!w-full h-full !object-cover !aspect-square")}
      autoPlay
      muted
      loop
    >
      <source src="/abstractVideo.mp4" type="video/mp4" />
    </video>
  );
};

export default AbstractShape;

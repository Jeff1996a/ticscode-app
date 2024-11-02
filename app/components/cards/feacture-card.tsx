import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
    Button,
} from "@material-tailwind/react";
import { IconType } from "react-icons";

interface FeatureCardPropsType {
  color: any;
  title: string;
  icon: any;
  description: string;
}
  
export function FeatureCard({ color, icon, title, description } : FeatureCardPropsType) {
    return (
      <Card className="rounded-2xl shadow-lg shadow-gray-500/10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <CardBody className="px-6 text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <IconButton
            variant="gradient"
            size="lg"
            color={color}
            className="pointer-events-none mb-6 rounded-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            {icon}
          </IconButton>
          <Typography variant="h5" className="mb-2" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {title}
          </Typography>
          <Typography className="font-thin text-blue-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {description}
          </Typography>
        </CardBody>
        
      </Card>
    );
  }
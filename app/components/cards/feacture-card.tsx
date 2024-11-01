import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
    Button,
  } from "@material-tailwind/react";
  
  export function FeatureCard({ color, icon, title, description }) {
    return (
      <Card className="rounded-2xl shadow-lg shadow-gray-500/10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
        <CardBody className="px-6 text-center">
          <IconButton
            variant="gradient"
            size="lg"
            color={color}
            className="pointer-events-none mb-6 rounded-full"
          >
            {icon}
          </IconButton>
          <Typography variant="h5" className="mb-2" color="blue-gray">
            {title}
          </Typography>
          <Typography className="font-thin text-blue-gray-600">
            {description}
          </Typography>
        
        </CardBody>
        
      </Card>
    );
  }
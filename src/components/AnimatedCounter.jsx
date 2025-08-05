import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ 
  end, 
  duration = 2.5, 
  suffix = "", 
  prefix = "", 
  separator = ",", 
  decimals = 0,
  format = "default",
  className = "",
  enableScrollSpy = true,
  scrollSpyOnce = true 
}) => {
  // Handle different formats
  const getFormattedProps = () => {
    switch (format) {
      case "K":
        return {
          end: end / 1000,
          suffix: "K" + suffix,
          decimals: end >= 1000 ? 0 : 1
        };
      case "M":
        return {
          end: end / 1000000,
          suffix: "M" + suffix,
          decimals: 1
        };
      case "percentage":
        return {
          end: end,
          suffix: "%" + suffix,
          decimals: 0
        };
      default:
        return {
          end: end,
          suffix: suffix,
          decimals: decimals
        };
    }
  };

  const formattedProps = getFormattedProps();

  return (
    <span className={className}>
      <CountUp
        start={0}
        end={formattedProps.end}
        duration={duration}
        separator={separator}
        decimals={formattedProps.decimals}
        prefix={prefix}
        suffix={formattedProps.suffix}
        enableScrollSpy={enableScrollSpy}
        scrollSpyOnce={scrollSpyOnce}
      />
    </span>
  );
};

export default AnimatedCounter;
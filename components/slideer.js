import React, { useState, useRef, useCallback } from "react";
import People from "./people";
import { __safePerformanceNow } from "../lib/util";
import { Box } from "@chakra-ui/react";


const CompiledDemo = () => {
  const t0 = useRef({});
  const [perfData, setPerfData] = useState({});

  const onPeopleStartPerformance = useCallback(
    () => (t0.current = Object.assign({}, t0.current, { people: __safePerformanceNow() })),
    [],
  );

  const onPeopleEndPerformance  = useCallback(({ totalTries }) => {
    setPerfData((prevPerfData) =>
      Object.assign({}, prevPerfData, {
        people: {
          computationTime: Math.floor(__safePerformanceNow() - t0.current["people"]),
          totalTries,
        },
      }),
    );
  }, []);

 
  return (
    <Box h="100%">
 
      <People
        onStartPerformance={onPeopleStartPerformance}
        onEndPerformance={onPeopleEndPerformance}
      /> 
    </Box>
  );
};

export default CompiledDemo;

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import { motion } from "framer-motion";
import { rackPerformanceData } from "../data/RackPerformanceData";

// Process the data: Calculate total weight per rack and handle product labels
const transformedData = rackPerformanceData.map((rack) => {
  const totalWeight = rack.products.reduce((sum, product) => sum + product.weight, 0);
  const productIds = rack.products.map((product) => product.productId).join(", "); // Join product IDs

  return {
    rackId: rack.rackId,
    weight: totalWeight,
    productIds, // Store product IDs as a string
  };
});

const RackBar = () => {
  return (
    <motion.div
      className="bg-[#1b1b1b] backdrop-blur-md rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div style={{ width: "100%", height: 300 }} className="p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={transformedData} barSize={35} barGap={2} barCategoryGap="15%">
            <XAxis
              dataKey="rackId"
              stroke="#A3A3A3"
              tick={{ fill: "#A3A3A3", fontSize: 12 }}
              label={{
                value: "RACK ID",
                position: "insideBottom",
                offset: -5,
                fill: "#A3A3A3",
              }}
            />
            <YAxis
              stroke="#A3A3A3"
              tick={{ fill: "#A3A3A3", fontSize: 12 }}
              tickFormatter={(value) => `${value} kg`}
              label={{
                value: "WEIGHT",
                angle: -90,
                position: "insideLeft",
                fill: "#A3A3A3",
              }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#1b1b1b", color: "#fff" }}
              formatter={(value, name, props) => [
                `${value} kg`,
                `Products: ${props.payload.productIds}`,
              ]}
            />
            <Bar dataKey="weight" fill="#22C55E" radius={[5, 5, 0, 0]}>
              <LabelList dataKey="rackId" position="top" fill="white" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RackBar;
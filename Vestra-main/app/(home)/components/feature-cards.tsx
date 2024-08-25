import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "../../../config/features.json";

export const FeatureCards = () => {
  return (
    <div className="flex w-full overflow-x-scroll md:overflow-hidden scrollbar-hide py-4 justify-start md:justify-center">
      <div className="flex space-x-4 px-4 lg:px-0">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-transparent border border-[#2f2e2d] flex-shrink-0 flex-grow-0 lg:w-[300px] w-[250px] p-4 lg:p-6 text-left"
          >
            <CardHeader>
              <CardTitle className="text-[#E52D27] text-xl font-semibold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#BFBFBF] text-base">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


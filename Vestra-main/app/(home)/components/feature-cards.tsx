import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "../../../config/features.json";

// export const FeatureCards = () => {
//   return (
//     <div className="flex overflow-x-scroll scrollbar-hide w-full justify-center relative lg:py-7 lg:pb-2 md:py-4 md:pb-0">
//       <div className="flex flex-nowrap lg:ml-0 md:ml-10 ml-20 space-x-4 -mx-4 px-4 scrollbar-hide">
//         {features.map((feature, index) => (
//           <Card
//             key={index}
//             className="bg-transparent border border-[#2f2e2d] flex justify-center items-start lg:w-[312px] md:w-[280px] lg:px-6 lg:py-8 md:px-4 md:py-6 lg:pb-[52px] md:pb-[24px] flex-col text-left gap-5"
//           >
//             <CardHeader className="p-0">
//               <CardTitle className="text-[#E52D27] font-ttfir text-2xl font-semibold leading-[31px]">
//                 {feature.title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-0">
//               <p className="text-lg text-[#BFBFBF] font-medium font-alliance">
//                 {feature.description}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// FeatureCards Component
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { features } from "../../config/features.json";

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


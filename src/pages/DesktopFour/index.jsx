import React from "react";

import { Img, Line, Text } from "components";

const DesktopFourPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-swissranormal gap-[33px] items-center justify-start mx-auto w-full">
        <div className="sm:h-[1060px] h-[1120px] md:h-[1126px] md:px-5 relative w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="sm:h-[609px] h-[656px] md:h-[675px] relative w-full">
                <div className="sm:h-[609px] h-[656px] md:h-[675px] m-auto w-full">
                  <div className="bg-teal-200 flex flex-col h-full items-center justify-start m-auto p-[18px] w-full">
                    <div className="flex flex-col gap-[37px] justify-start mb-[127px] w-[92%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mr-5 w-[99%] md:w-full">
                        <Img
                          className="h-[53px] md:h-auto object-cover"
                          src="images/img_artboard1copy.png"
                          alt="artboard1copy"
                        />
                        <div className="flex flex-row gap-[85px] items-end justify-start w-auto sm:w-full">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtSwissraNormal16"
                          >
                            تواصل معنا
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtSwissraNormal16"
                          >
                            من نحن
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtSwissraNormal16"
                          >
                            الصفحة الرئيسية
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[356px] h-[403px] md:ml-[0] ml-[265px] relative w-[77%] md:w-full">
                        <div className="absolute bg-gray-100_3f h-[356px] right-[2%] top-[0] w-[89%]"></div>
                        <div className="absolute bottom-[4%] flex flex-row items-end justify-center right-[1%] w-2/5">
                          <div className="flex flex-col items-center justify-start mb-[3px] mt-[13px]">
                            <Text
                              className="text-base text-right text-white-A700"
                              size="txtSwissraNormal16"
                            >
                              بغداد - سريع الغزالية - قرب من جسر الزيتون
                            </Text>
                          </div>
                          <Img
                            className="h-9"
                            src="images/img_instagram1.svg"
                            alt="instagramOne"
                          />
                        </div>
                        <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-end justify-center left-[0] p-[3px] w-[39%]">
                          <Img
                            className="h-[136px] md:h-auto my-[66px] object-cover w-[96%]"
                            src="images/img_image4.png"
                            alt="imageFour"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[12%] h-[236px] object-cover right-[0] w-[36%]"
                          src="images/img_as7.png"
                          alt="as7"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[83px] object-cover right-[0] w-[19%]"
                    src="images/img_rectangle9.png"
                    alt="rectangleNine"
                  />
                  <Img
                    className="absolute bottom-[19%] h-[365px] left-[0] object-cover w-[23%]"
                    src="images/img_rectangle4.png"
                    alt="rectangleFour_One"
                  />
                </div>
                <Img
                  className="absolute bottom-[18.5%] h-[380px] left-[0] object-cover w-[17%]"
                  src="images/img_as7_380x214.png"
                  alt="as7_One"
                />
              </div>
              <div className="bg-gray-100 flex flex-col gap-[19px] items-end justify-center p-[5px]">
                <Text
                  className="mr-[102px] mt-[101px] md:text-3xl sm:text-[28px] text-[32px] text-lime-800 text-right"
                  size="txtSwissraNormal32"
                >
                  من نحن ؟
                </Text>
                <Text
                  className="leading-[40.00px] mb-[123px] mr-[102px] text-lime-800 text-right text-xl"
                  size="txtSwissraNormal20"
                >
                  <>
                    نسيج من التراث والابتكار والمجتمع.
                    <br />
                    مجمع سكني بنظام فيلا وبناء هيكلي يتميز بموقعه الاستراتيجي
                    الكائن في
                    <br />
                    yبغداد -سريع الغزالية - قرب من جسر الزيتون
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] h-[315px] inset-x-[0] mx-auto w-full">
            <Line className="absolute bg-teal-200 bottom-[3%] h-px inset-x-[0] mx-auto w-full" />
            <Img
              className="absolute bottom-[6%] h-[315px] left-[0] my-auto object-cover top-[0] w-[27%]"
              src="images/img_a2.png"
              alt="a2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="bg-teal-200 flex flex-col items-end justify-end max-w-[886px] mx-auto p-[97px] md:px-5 w-full">
            <Text
              className="leading-[51.00px] mt-[49px] text-center text-white-A700 text-xl w-[94%] sm:w-full"
              size="txtSwissraNormal20WhiteA700"
            >
              إكتشف قلب وروح مدينتنا، حيث يلتقي التاريخ بالحياة الحديثة، ويصبح
              الجيران عائلة. انضم إلينا في رحلة من النمو والاستدامة والأحلام
              المشتركة بينما نبني مستقبلا أكثر إشراقا معاً.
            </Text>
          </div>
          <div className="h-[261px] md:px-5 relative w-full">
            <div className="absolute bg-lime-800 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-end mx-auto p-[31px] sm:px-5 w-full">
              <div className="flex sm:flex-1 flex-row gap-[61px] items-end justify-start md:mt-0 mt-[138px] w-auto sm:w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtSwissraNormal16"
                >
                  تواصل معنا
                </Text>
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtSwissraNormal16"
                >
                  من نحن
                </Text>
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtSwissraNormal16"
                >
                  الصفحة الرئيسية
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[344px] md:mt-0 mt-[137px] text-right text-white-A700 text-xl"
                size="txtSwissraNormal20WhiteA700"
              >
                بغداد - سريع الغزالية - قرب من جسر الزيتون
              </Text>
              <Img
                className="h-[26px] ml-2.5 md:ml-[0] mr-[23px] md:mt-0 mt-[138px]"
                src="images/img_instagram1.svg"
                alt="1814106locatio"
              />
            </div>
            <Img
              className="absolute bottom-[0] h-px left-[0] object-cover w-[88%]"
              src="images/img_as4.png"
              alt="as4"
            />
            <Img
              className="absolute h-[150px] inset-y-[0] justify-center left-[10%] m-auto object-cover right-[0] w-[45%]"
              src="images/img_artboard1copy.png"
              alt="artboard1copy_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;

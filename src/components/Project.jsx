import React, { useState } from "react";
import data from "../store/store.json";
import { motion } from "framer-motion";
import {
  Box,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Tilt from "react-parallax-tilt";
import "../index.css";

const Project = () => {
  const [projectData, setProjectData] = useState(data);

  return (
    <>
      <section id="projects" className="project_styling">
        <div className="pl-12 text-white">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="lg:mt-60 text-[32px] font-medium"
          >
            What I've Built So Far
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <hr className="mt-1 border-2 border-[#00D1FF] w-96" />
          </motion.div>
        </div>

        <div className="w-full flex flex-wrap justify-evenly mt-10 pl-10 gap-x-2 gap-y-16 xl:gap-x-10">
          {projectData.map((val, index) => {
            return (
              <>
                <React.Fragment key={`${val}-${index}`}>
                  <Tilt className="w-80">
                    <div className="h-[385px] bg-white bg-opacity-10 relative z-2 backdrop-blur-sm shadow-5xl border-2 border-opacity-30 backdrop-filter rounded-2xl flex flex-col -z-10">
                      <div className="rounded-2xl">
                        <Swiper
                          spaceBetween={30}
                          centeredSlides={true}
                          autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Autoplay, Pagination, Navigation]}
                          className="mySwiper"
                        >
                          {val.images.map((v, i) => {
                            return (
                              <>
                                <SwiperSlide>
                                  <img
                                    key={i}
                                    src={require(`../project_images/${v}`)}
                                    alt=""
                                  />
                                </SwiperSlide>
                              </>
                            );
                          })}
                        </Swiper>
                      </div>
                      <div className="text-[#00D1FF] text-xs font-bold tracking-wider mt-5 pl-3">
                        PROJECT {val.id}
                      </div>
                      <div className="font-semibold pl-3 text-white text-xl">
                        {val.name}
                      </div>
                      <div className="px-4 mt-5 z-10 flex justify-between w-full">
                        <div>
                          <Popover>
                            <PopoverTrigger>
                              <Box
                                tabIndex="0"
                                role="button"
                                aria-label="Some box"
                                p={5}
                                w="120px"
                                bg="gray.300"
                                children="Tech Stack"
                                zIndex={10}
                                textColor={"white"}
                                transition="all 0.2s"
                                borderRadius="md"
                                borderWidth="2px"
                                _hover={{ bg: "gray.400" }}
                                _expanded={{ bg: "blue.400" }}
                                _focus={{ boxShadow: "outline" }}
                                textAlign={"center"}
                                borderColor={"#00D1FF"}
                                h={40}
                              />
                            </PopoverTrigger>
                            <PopoverContent
                              bg="#1E1E1E"
                              borderRadius="10px"
                              borderWidth="2px"
                              color="white"
                              borderColor={"#00D1FF"}
                              w={360}
                              p={5}
                              marginLeft={90}
                            >
                              <PopoverBody>
                                <div className="flex flex-row flex-wrap gap-4 p-5">
                                  {val.tech.map((nValues, iValues) => {
                                    return (
                                      <>
                                        <div
                                          key={`${nValues}-${iValues}`}
                                          className={`px-3 h-[40px] border-[3px] flex justify-center items-center ${nValues.border} font-medium ${nValues.text} hover:${nValues.color} cursor-pointer hover:text-white tracking-widest transition ease-in`}
                                        >
                                          {nValues.name}
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <a href={val?.github ? val?.github : val?.live} className="cursor-pointer" target="_blank">
                            <button className="w-[120px] text-white p-5 z-10 transition-all 300ms border-[2px] border-[#00D1FF] h-[38px] flex justify-center items-center cursor-pointer">
                              {val?.github ? <span>Github</span> : <span>Live</span>}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </React.Fragment>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Project;

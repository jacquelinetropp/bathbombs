import styled from "styled-components";

import { MdAccountBox, MdEmail, MdMailOutline, MdClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineCheckSquare,
  AiFillCheckSquare,
} from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { BsDot } from "react-icons/bs";

export const AccountIcon = styled(MdAccountBox)`
  font-size: 2rem;
  margin: 0 1rem;
`;

export const ShoppingIcon = styled(FaShoppingCart)`
  font-size: 2rem;
`;

export const LeafIcon = styled(RiLeafFill)`
  font-size: 5rem;
`;

export const HeartIcon = styled(AiFillHeart)`
  font-size: 5rem;
`;

export const StarIcon = styled(AiFillStar)`
  font-size: 5rem;
`;

export const XIcon = styled(GrClose)`
  font-size: 2rem;
`;

export const LeftArrow = styled(IoMdArrowDropleft)`
  font-size: 2rem;
`;

export const RightArrow = styled(IoMdArrowDropright)`
  font-size: 2rem;
`;

export const UnsentPackage = styled(MdMailOutline)`
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    color: var(--color-main);
  }
`;
export const SentPackage = styled(MdEmail)`
  font-size: 3rem;
  color: var(--color-main);
  cursor: pointer;
`;
export const UnPackaged = styled(AiOutlineCheckSquare)`
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    color: var(--color-main);
  }
`;

export const Packaged = styled(AiFillCheckSquare)`
  font-size: 3rem;
  color: var(--color-main);
  cursor: pointer;
`;

export const RemoveOrder = styled(MdClose)`
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    color: var(--color-main);
  }
`;

export const DotIcon = styled(BsDot)`
  font-size: 2rem;
`;

import styled from 'styled-components';

import {MdAccountBox} from 'react-icons/md';
import {FaShoppingCart} from 'react-icons/fa';
import {RiLeafFill} from 'react-icons/ri';
import {AiFillHeart, AiFillStar} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io';

export const AccountIcon = styled(MdAccountBox)`
    font-size: 2rem;
    margin: 0 1rem;
`

export const ShoppingIcon = styled(FaShoppingCart)`
    font-size: 2rem;

`

export const LeafIcon = styled(RiLeafFill)`
    font-size: 2rem;
`

export const HeartIcon = styled(AiFillHeart)`
    font-size: 2rem;
`

export const StarIcon = styled(AiFillStar)`
    font-size: 2rem;
`

export const XIcon = styled(GrClose)`
    font-size: 2rem;
`

export const LeftArrow = styled(IoMdArrowDropleft)`
    font-size: 2rem;
`

export const RightArrow = styled(IoMdArrowDropright)`
    font-size: 2rem;
`

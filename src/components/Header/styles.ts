'use client'

import { styled } from "styled-components";
import Link from "next/link";

export const Header = styled.header`
    background: black;
    position: fixed;
    width: 100%;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px;

`
export const List = styled.ul`
    display: flex;
    gap: 40px;
`
export const List_Link = styled(Link)`
    color: #ffff;
    cursor: pointer;
    font: 16px;
    font-style: italic;
    font-weight: bold;
    &:hover {
        color:#EC1C23;
    }
`
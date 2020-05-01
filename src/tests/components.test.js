import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { MemoryRouter } from "react-router-dom"
import { App } from "../App"
import { AlbumItem } from "../components/AlbumItem"
import { AlbumPage } from "../components/AlbumPage"
import { Photo } from "../components/Photo"

Enzyme.configure({ adapter: new Adapter() })

describe("components", () => {
    describe("App", () => {
        it("should render", () => {
            const wrapper = shallow(
                <App state={{ albums: [], users: [], namedAlbums: [] }} />
            )
            expect(wrapper).toBeTruthy()
        })
    })
    describe("AlbumItem", () => {
        it("should render", () => {
            const wrapper = shallow(<AlbumItem />)
            expect(wrapper).toBeTruthy()
        })
    })
    describe("AlbumPage", () => {
        it("should render", () => {
            const wrapper = shallow(
                <MemoryRouter initialEntries={["/albums/1"]}>
                    <AlbumPage state={{ photos: [] }} />
                </MemoryRouter>
            )
            expect(wrapper).toBeTruthy()
        })
    })
    describe("Photo", () => {
        it("should render", () => {
            const wrapper = shallow(
                <MemoryRouter initialEntries={["/albums/1/photo/1"]}>
                    <Photo state={{ photos: [] }} />
                </MemoryRouter>
            )
            expect(wrapper).toBeTruthy()
        })
    })
})

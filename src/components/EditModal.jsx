"use client";

// import { Envelope } from "@gravity-ui/icons";
import { RiEdit2Fill } from "react-icons/ri";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";

export function EditModal() {
    return (
        <Modal>
            <Button className=" flex items-center text-xl bg-[#15A1BF]">
                <RiEdit2Fill className="h-6 w-6" />
                <span>Edit</span>
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header className="text-center">
                            <Modal.Heading>
                                <p className="text-2xl font-bold text-[#15A1BF]">Edit Destination</p>
                            </Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Please fill in the form below to edit the destination details.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Destination Name */}
                                        <div className="md:col-span-2">
                                            <TextField name="destinationName" isRequired>
                                                <Label>Destination Name</Label>
                                                <Input placeholder="Bali Paradise" variant="secondary" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField name="country" isRequired>
                                            <Label>Country</Label>
                                            <Input placeholder="Indonesia" variant="secondary" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category - Updated Select Component */}
                                        <div>
                                            <Select
                                                name="category"
                                                isRequired
                                                className="w-full "
                                                placeholder="Select category"
                                            >
                                                <Label>Category</Label>
                                                <Select.Trigger className="rounded-2x bg-[#ebebec]">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Beach" textValue="Beach">
                                                            Beach
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Mountain" textValue="Mountain">
                                                            Mountain
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="City" textValue="City">
                                                            City
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Adventure" textValue="Adventure">
                                                            Adventure
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Cultural" textValue="Cultural">
                                                            Cultural
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Luxury" textValue="Luxury">
                                                            Luxury
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Price */}
                                        <TextField name="price" type="number" isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input
                                                variant="secondary"
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}
                                        <TextField name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                                variant="secondary"
                                                placeholder="7 Days / 6 Nights"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date */}
                                        <div className="md:col-span-2">
                                            <TextField name="departureDate" type="date" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input variant="secondary" type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    variant="secondary"
                                                    type="url"
                                                    placeholder="https://example.com/bali-paradise.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField name="description" isRequired>
                                                <Label>Description</Label>
                                                <TextArea
                                                    variant="secondary"
                                                    placeholder="Describe the travel experience..."
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <Modal.Footer className="w-full grid grid-cols-4 gap-2">
                                        <Button className={"text-[#15A1BF]"} slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button className={"col-span-3 w-full bg-[#15A1BF]"} slot="close">
                                            Send Message
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
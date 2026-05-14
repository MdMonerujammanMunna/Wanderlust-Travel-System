"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDeleteSweep } from "react-icons/md";

export function DeleteModal({ singledata }) {
    const { _id, destinationName } = singledata

    const RemoveHandele = async () => {
        const Maindata = await fetch(`http://localhost:5000/AllData/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
        redirect("/Destination")
        const data = await Maindata.json()
    }
    return (
        <AlertDialog>
            <Button className={""} variant="danger">
                <MdDeleteSweep className="h-6 w-6" />
                <span className="text-xl">Cancel</span>
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-150">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete destination permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong>{" "}
                                and all of its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={RemoveHandele} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
import { Button, H1, H2, H3, H4, H5 } from "../../components";

export function ComponentView() {
    return (
        <div className="w-full max-w-lg content-center">
            <div className="my-4">
                <div className="mb-8">
                    <H1>Titles</H1>
                    <hr />
                </div>
                <H1>Title H1</H1>
                <H2>Title H2</H2>
                <H3>Title H3</H3>
                <H4>Title H4</H4>
                <H5>Title H5</H5>
            </div>
            <div className="space-y-8">
                <div>
                    <H1>Buttons</H1>
                    <hr />
                </div>
                <div className="space-y-2">
                    <Button color="primary" size="small">Button Primary Small</Button>
                    <Button color="primary" size="medium">Button Primary Medium</Button>
                    <Button color="primary" size="large">Button Primary Large</Button>
                </div>
                <div className="space-y-2">
                    <Button color="primary" size="small" plain>Button Primary Small Plain</Button>
                    <Button color="primary" size="medium" plain>Button Primary Medium Plain</Button>
                    <Button color="primary" size="large" plain>Button Primary Large Plain</Button>
                </div>
                <div className="space-y-2">
                    <Button color="secondary" size="small">Button Secondary Small</Button>
                    <Button color="secondary" size="medium">Button Secondary Medium</Button>
                    <Button color="secondary" size="large">Button Secondary Large</Button>
                </div>
                <div className="space-y-2">
                    <Button color="secondary" size="small" plain>Button Secondary Small Plain</Button>
                    <Button color="secondary" size="medium" plain>Button Secondary Medium Plain</Button>
                    <Button color="secondary" size="large" plain>Button Secondary Large Plain</Button>
                </div>
                <div className="bg-primary p-4">
                    <div className="space-y-2 mb-4">
                        <Button color="basic" size="small">Button Basic Small</Button>
                        <Button color="basic" size="medium">Button Basic Medium</Button>
                        <Button color="basic" size="large">Button Basic Large</Button>
                    </div>
                    <div className="space-y-2">
                        <Button color="basic" size="small" plain>Button Basic Small Plain</Button>
                        <Button color="basic" size="medium" plain>Button Basic Medium Plain</Button>
                        <Button color="basic" size="large" plain>Button Basic Large Plain</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
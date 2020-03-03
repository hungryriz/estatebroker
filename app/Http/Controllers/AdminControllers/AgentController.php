<?php

namespace App\Http\Controllers\AdminControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Agent;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class AgentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $agents = Agent::paginate(10);

        // load the view and pass the nerds
        return view('admin.agents.index',compact('agents'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.agents.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try{
            $this->validate($request, [
                'name' => 'required|min:6',
                'phone' => 'required',
                'address' => 'required',
                'city' => 'required',
                'state' => 'required',
                'path' => 'required',
            ]);

            $msg = __('New Agent :name is added', ['name' => $request->input('name')]);

            $image = $request->hasFile('path') ? $request->file('path') : false;
            if($image) {
                $extension = $image->getClientOriginalExtension();
                Storage::disk('public')->put('images/'.$image->getFilename().'.'.$extension,  File::get($image));
            }

            $agent = new Agent([
                'name' => $request->input('name'),
                'phone' => $request->input('phone'),
                'mobile_phone' => $request->input('mobile_phone'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'country' => $request->input('country'),
                'path' => $image ? $image->getFilename().'.'.$extension : null,
            ]);

            $agent->save();

             return redirect(route('agents.index'))->with('success',$msg);
        } catch (Exception $e) {
            return back()->with('error',$e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $agent = Agent::find($id);
        return view('admin.agents.edit', compact('agent'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

        try{
            $this->validate($request, [
                'name' => 'required|min:6',
                'phone' => 'required',
                'address' => 'required',
                'city' => 'required',
                'state' => 'required',
            ]);

            $msg = __('Details are updated for :name', ['name' => $request->input('name')]);
            $agent = Agent::find($id);

            $image = $request->hasFile('path') ? $request->file('path') : false;
            if($image) {
                $extension = $image->getClientOriginalExtension();
                if(Storage::disk('public')->exists('images/'.$agent->path)) {
                    Storage::disk('public')->delete('images/'.$agent->path);
                }
                Storage::disk('public')->put('images/'.$image->getFilename().'.'.$extension,  File::get($image));
            }

            $agent->update([
                'name' => $request->input('name'),
                'phone' => $request->input('phone'),
                'mobile_phone' => $request->input('mobile_phone'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'country' => $request->input('country'),
                'path' => $image ? $image->getFilename().'.'.$extension : $agent->path,
            ]);

             return back()->with('success',$msg);
        } catch (Exception $e) {
            return back()->with('error',$e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //
        try {
            $agent = Agent::findOrFail($id);
            if($agent) {
                $agent->delete();
            } else {
                return back()->with('error',trans('Agent not found'));
            }
            return back()->with('success',trans('Agent deleted'));

        }catch(ModelNotFoundException $e){
            return back()->with('error',trans($e->getMessage()));
        } catch (Exception $e) {
            return rback()->with('error',trans($e->getMessage()));
        }
    }
}
